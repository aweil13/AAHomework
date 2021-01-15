class Map

    def initialize
        @map = []
    end

    def set(key,value)
        @map.any? {|array| array[0] == key} ? @map.each_index {|idx| @map[idx][1] = value if @map[idx][0] == key } : @map << [key, value]
    end

    def get(key)
        @map.each {|array| return array[1] if array[0] == key && array.length == 2}
    end

    def delete(key)
        @map.each {|array| array.shift if array[0] == key}   
    end

    def show
        p @map
    end

end