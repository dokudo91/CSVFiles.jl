using StringEncodings, DelimitedFiles, DataFrames

"""
    readcsv(io::IO, ::Type{Matrix{T}}; delim=',', ops...)::Matrix{T} where {T}

# Examples
```jldoctest
julia> readcsv(IOBuffer("1,2\\n3,4"), Matrix{Int})
2×2 Matrix{Int64}:
 1  2
 3  4
```
"""
function readcsv(io::IO, ::Type{Matrix{T}}; delim=',', ops...)::Matrix{T} where {T}
    if get(ops, :header, false)
        mat, _ = readdlm(io, delim, T; ops...)
        mat
    else
        readdlm(io, delim, T; ops...)
    end
end

"""
    readcsv(io::IO, ::Type{Matrix}; delim=',', ops...)

# Examples
```jldoctest
julia> readcsv(IOBuffer("1,2\\n3,4"), Matrix)
2×2 Matrix{Any}:
 1  2
 3  4
```
"""
readcsv(io::IO, ::Type{Matrix}; delim=',', ops...) = readcsv(io, Matrix{Any}; delim, ops...)

"""
    readcsv(io::IO; delim=',', ops...)

# Examples
```jldoctest
julia> readcsv(IOBuffer("1,2\\n3,4"))
2×2 Matrix{Any}:
 1  2
 3  4
```
"""
readcsv(io::IO; delim=',', ops...) = readcsv(io, Matrix; delim, ops...)

"""
    readcsv(io::IO, ::Type{DataFrame}, T; delim=',', ops...)::DataFrame

# Examples
```jldoctest
julia> readcsv(IOBuffer("1,2\\n3,4"), DataFrame, Int)
2×2 DataFrame
 Row │ x1     x2    
     │ Int64  Int64 
─────┼──────────────
   1 │     1      2
   2 │     3      4
```
"""
function readcsv(io::IO, ::Type{DataFrame}, T; delim=',', ops...)::DataFrame
    if get(ops, :header, false)
        mat, header = readdlm(io, delim, T; ops...)
        DataFrame(mat, header |> vec)
    else
        mat = readdlm(io, delim, T; ops...)
        DataFrame(mat, :auto)
    end
end

"""
    readcsv(io::IO, ::Type{DataFrame}; delim=',', ops...)

# Examples
```jldoctest
julia> readcsv(IOBuffer("1,2\\n3,4"), DataFrame)
2×2 DataFrame
 Row │ x1   x2  
     │ Any  Any 
─────┼──────────
   1 │ 1    2
   2 │ 3    4
```
"""
readcsv(io::IO, ::Type{DataFrame}; delim=',', ops...) = readcsv(io, DataFrame, Any; delim, ops...)

"""
    readcsv(path::AbstractString, T; delim=',', encoding=enc"utf-8", ops...)

# Examples
```jldoctest
julia> writecsv("test.csv", [1 2;3 4])

julia> readcsv("test.csv", Matrix{Int})
2×2 Matrix{Int64}:
 1  2
 3  4
```
"""
readcsv(path::AbstractString, T; delim=',', encoding=enc"utf-8", ops...) = readcsv(open(path, encoding), T; delim, ops...)

"""
    readcsv(path::AbstractString; delim=',', encoding=enc"utf-8", ops...)

# Examples
```jldoctest
julia> writecsv("test.csv", [1 2;3 4])

julia> readcsv("test.csv")
2×2 Matrix{Any}:
 1  2
 3  4
```
"""
readcsv(path::AbstractString; delim=',', encoding=enc"utf-8", ops...) = readcsv(open(path, encoding); delim, ops...)

"""
    readcsv(path::AbstractString, ::Type{DataFrame}, T; delim=',', encoding=enc"utf-8", ops...)

# Examples
```jldoctest
julia> writecsv("test.csv", [1 2;3 4])

julia> readcsv("test.csv", DataFrame, Int)
2×2 DataFrame
 Row │ x1     x2    
     │ Int64  Int64 
─────┼──────────────
   1 │     1      2
   2 │     3      4

julia> readcsv("test.csv", DataFrame, Float64; header=true)
1×2 DataFrame
 Row │ 1        2       
     │ Float64  Float64 
─────┼──────────────────
   1 │     3.0      4.0
```
"""
function readcsv(path::AbstractString, ::Type{DataFrame}, T; delim=',', encoding=enc"utf-8", ops...)
    readcsv(open(path, encoding), DataFrame, T; delim, ops...)
end

"""
    writecsv(path, mat, header)

# Examples
```jldoctest
julia> writecsv("testh.csv", [1 2;3 4], [:a, :b])

julia> readcsv("testh.csv")
3×2 Matrix{Any}:
  "a"   "b"
 1     2
 3     4
```
"""
function writecsv(path, mat, header)
    reheader = String.(reshape(header, (1, length(header))))
    open(path, "w") do io
        writedlm(io, reheader, ',')
        writedlm(io, mat, ',')
    end
end
writecsv(path, mat) = writedlm(path, mat, ',')