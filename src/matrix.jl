"""
    filter_row(f, a)

`Matrix`を行ごとにfilterする

# Examples
```jldoctest
julia> filter_row(x->isodd(x[1]), [1 2; 2 3])
1×2 Matrix{Int64}:
 1  2

julia> filter_row(x->false, [1 2; 2 3])
SubArray{Int64, 1, Matrix{Int64}, Tuple{Int64, Base.Slice{Base.OneTo{Int64}}}, true}[]
```
"""
function filter_row(f, a)
    rows = filter(f, eachrow(a))
    if isempty(rows)
        rows
    else
        rows |> stack |> permutedims
    end
end

"""
    union_row(a1, a2, col)

`Matrix`を`col`列に対してunionする

# Examples
```jldoctest
julia> union_row([1 2; 2 3], [1 2; 3 3], 1)
3×2 Matrix{Int64}:
 1  2
 2  3
 3  3

julia> union_row([1 2; 2 3], [1 2; 2 4], 1)
2×2 Matrix{Int64}:
 1  2
 2  3
```
"""
function union_row(a1, a2, col)
    fa2 = filter_row(x -> x[col] ∉ a1[:, col], a2)
    if isempty(fa2)
        a1
    else
        vcat(a1, fa2)
    end 
end