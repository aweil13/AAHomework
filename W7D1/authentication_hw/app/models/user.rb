class User < ApplicationRecord
    validates_presence_of :username, :session_token
    validates_uniqueness_of :username, :session_token
    validates_presence_of :password_digest, :message => "Password can't be blank"
    validates_length_of :password, minimum: 6, allow_nil: true
    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return user if user and BCrypt::Password.new(user.password_digest).is_password?(password)
        nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end


    def ensure_session_token
        self.session_token ||= self.class.generate_session_token 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

end
