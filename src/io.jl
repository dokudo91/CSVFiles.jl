using StringEncodings, DelimitedFiles, DataFrames

"""
    readcsv(io::IO, ::Type{Matrix{T}}; delim=',', ops...)::Matrix{T} where {T}
    readcsv(io::IO, ::Type{Matrix}; delim=',', ops...)
    readcsv(io::IO; delim=',', ops...)
    readcsv(io::IO, ::Type{DataFrame}, T; delim=',', ops...)::DataFrame
    readcsv(io::IO, ::Type{DataFrame}; delim=',', ops...)
    readcsv(path::AbstractString, T; delim=',', encoding=enc"utf-8", ops...)
    readcsv(path::AbstractString; delim=',', encoding=enc"utf-8", ops...)
    readcsv(path::AbstractString, ::Type{DataFrame}, T; delim=',', encoding=enc"utf-8", ops...)

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
readcsv(io::IO, ::Type{Matrix}; delim=',', ops...) = readcsv(io, Matrix{Any}; delim, ops...)
readcsv(io::IO; delim=',', ops...) = readcsv(io, Matrix; delim, ops...)
function readcsv(io::IO, ::Type{DataFrame}, T; delim=',', ops...)::DataFrame
    if get(ops, :header, false)
        mat, header = readdlm(io, delim, T; ops...)
        DataFrame(mat, header |> vec)
    else
        mat = readdlm(io, delim, T; ops...)
        DataFrame(mat, :auto)
    end
end
readcsv(io::IO, ::Type{DataFrame}; delim=',', ops...) = readcsv(io, DataFrame, Any; delim, ops...)
readcsv(path::AbstractString, T; delim=',', encoding=enc"utf-8", ops...) = readcsv(open(path, encoding), T; delim, ops...)
readcsv(path::AbstractString; delim=',', encoding=enc"utf-8", ops...) = readcsv(open(path, encoding); delim, ops...)
function readcsv(path::AbstractString, ::Type{DataFrame}, T; delim=',', encoding=enc"utf-8", ops...)
    readcsv(open(path, encoding), DataFrame, T; delim, ops...)
end

"""
    writecsv(path, mat, header)
    writecsv(iopath, mat)

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
    headerrow = String.(reshape(header, (1, length(header))))
    open(path, "w") do io
        writecsv(io, headerrow)
        writecsv(io, mat)
    end
end
writecsv(iopath, mat) = writedlm(iopath, mat, ',')

"""
    eachrow_csv(io::IO; delim=',', ops...)
    eachrow_csv(path::AbstractString; delim=',', encoding=enc"utf-8", ops...)

```jldoctest
julia> writecsv("test.csv", [1 2;3 4])

julia> eachrow_csv("test.csv") |> collect
2-element Vector{Matrix{Float64}}:
 [1.0 2.0]
 [3.0 4.0]
```
"""
function eachrow_csv(io::IO; delim=',', ops...)
    Iterators.map(line -> readdlm(IOBuffer(line), delim; ops...), eachline(io))
end

function eachrow_csv(path::AbstractString; delim=',', encoding=enc"utf-8", ops...)
    eachrow_csv(open(path, encoding); delim, ops...)
end