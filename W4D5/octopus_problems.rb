def sluggish_octopus(array)
    longest = ""
    (0...array.length).each do |idx1|
        (idx1 + 1...array.length).each do |idx2|
           longest = array[idx2] if array[idx1].length < array[idx2].length
        end
    end
    longest
end

# p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

class Array
    def merge_sort(&prc)
        prc ||= proc {|x,y| x <=> y}
        return self if self.length <= 1
        midpoint = self.length/2
        left = self.take(midpoint).merge_sort(&prc)
        right = self.drop(midpoint).merge_sort(&prc)

        Array.merge(left,right,&prc)
    end

    
    def self.merge(left,right,&prc)
        merged = []
        until left.empty? or right.empty?
            case prc.call(left.first, right.first)
            when -1 
                merged << left.shift
            when 0
                merged << left.shift
            when 1
                merged << right.shift
            end
        end
        merged.concat(left)
        merged.concat(right)
        merged
    end
end

def dominant_octopus(array)
    prc = proc {|x,y| x.length <=> y.length}
    array.merge_sort(&prc)[-1]
end

# p dominant_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def clever_octopus(array)
    longest = array.first    
    array.each_with_index do |fish, idx|
       longest = fish if fish.length > longest.length
    end
    longest
end

# p clever_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def slow_dance(direction, tiles_array)
    tiles_array.each.each_with_index {|dir, idx| return idx if dir == direction }
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
# p slow_dance("up", tiles_array)
# p slow_dance("right-down", tiles_array)

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(dir , titles_hash)
    titles_hash[dir]
end
