#!/bin/ruby

def compareTriplets a, b
  a_points, b_points = 0, 0

  a.size.times do |idx|
    if a[idx] > b[idx]
      a_points += 1
    elsif a[idx] < b[idx]
      b_points += 1
    end
  end

  [a_points, b_points]
end

puts compareTriplets [1, 2, 3], [3, 2, 1]

def aVeryBigSum ar
  total = 0
  ar.each { |n| total += n }
  total
end

puts aVeryBigSum [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

mtx = [
  [1, 2, 3, 2],
  [4, 5, 6, 1],
  [9, 8, 9, 1],
  [3, 3, 4, 2]
]

def diagonalDiference mtx
  idx2 = mtx.size
  d1 = d2 = 0
  mtx.size.times do |idx|
    d1 += mtx[idx][idx]
    d2 += mtx[idx][idx2 -= 1]
  end
  d1 > d2 ? d1 - d2 : d2 - d1
end

puts diagonalDiference mtx
