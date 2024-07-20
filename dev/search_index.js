var documenterSearchIndex = {"docs":
[{"location":"#CSVFiles.jl","page":"CSVFiles.jl","title":"CSVFiles.jl","text":"","category":"section"},{"location":"","page":"CSVFiles.jl","title":"CSVFiles.jl","text":"Modules = [CSVFiles]\nPages   = [\"io.jl\", \"matrix.jl\"]","category":"page"},{"location":"#CSVFiles.readcsv-Tuple{AbstractString, Any}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(path::AbstractString, T; delim=',', encoding=enc\"utf-8\", ops...)\n\nExamples\n\njulia> writecsv(\"test.csv\", [1 2;3 4])\n\njulia> readcsv(\"test.csv\", Matrix{Int})\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Tuple{AbstractString, Type{DataFrames.DataFrame}, Any}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(path::AbstractString, ::Type{DataFrame}, T; delim=',', encoding=enc\"utf-8\", ops...)\n\nExamples\n\njulia> writecsv(\"test.csv\", [1 2;3 4])\n\njulia> readcsv(\"test.csv\", DataFrame, Int)\n2×2 DataFrame\n Row │ x1     x2    \n     │ Int64  Int64 \n─────┼──────────────\n   1 │     1      2\n   2 │     3      4\n\njulia> readcsv(\"test.csv\", DataFrame, Float64; header=true)\n1×2 DataFrame\n Row │ 1        2       \n     │ Float64  Float64 \n─────┼──────────────────\n   1 │     3.0      4.0\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Tuple{AbstractString}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(path::AbstractString; delim=',', encoding=enc\"utf-8\", ops...)\n\nExamples\n\njulia> writecsv(\"test.csv\", [1 2;3 4])\n\njulia> readcsv(\"test.csv\")\n2×2 Matrix{Any}:\n 1  2\n 3  4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Tuple{IO, Type{DataFrames.DataFrame}, Any}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(io::IO, ::Type{DataFrame}, T; delim=',', ops...)::DataFrame\n\nExamples\n\njulia> readcsv(IOBuffer(\"1,2\\n3,4\"), DataFrame, Int)\n2×2 DataFrame\n Row │ x1     x2    \n     │ Int64  Int64 \n─────┼──────────────\n   1 │     1      2\n   2 │     3      4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Tuple{IO, Type{DataFrames.DataFrame}}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(io::IO, ::Type{DataFrame}; delim=',', ops...)\n\nExamples\n\njulia> readcsv(IOBuffer(\"1,2\\n3,4\"), DataFrame)\n2×2 DataFrame\n Row │ x1   x2  \n     │ Any  Any \n─────┼──────────\n   1 │ 1    2\n   2 │ 3    4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Tuple{IO, Type{Matrix}}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(io::IO, ::Type{Matrix}; delim=',', ops...)\n\nExamples\n\njulia> readcsv(IOBuffer(\"1,2\\n3,4\"), Matrix)\n2×2 Matrix{Any}:\n 1  2\n 3  4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Tuple{IO}","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(io::IO; delim=',', ops...)\n\nExamples\n\njulia> readcsv(IOBuffer(\"1,2\\n3,4\"))\n2×2 Matrix{Any}:\n 1  2\n 3  4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Union{Tuple{T}, Tuple{IO, Type{Matrix{T}}}} where T","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(io::IO, ::Type{Matrix{T}}; delim=',', ops...)::Matrix{T} where {T}\n\nExamples\n\njulia> readcsv(IOBuffer(\"1,2\\n3,4\"), Matrix{Int})\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.writecsv-Tuple{Any, Any, Any}","page":"CSVFiles.jl","title":"CSVFiles.writecsv","text":"writecsv(path, mat, header)\n\nExamples\n\njulia> writecsv(\"testh.csv\", [1 2;3 4], [:a, :b])\n\njulia> readcsv(\"testh.csv\")\n3×2 Matrix{Any}:\n  \"a\"   \"b\"\n 1     2\n 3     4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.filter_row-Tuple{Any, Any}","page":"CSVFiles.jl","title":"CSVFiles.filter_row","text":"filter_row(f, a)\n\nMatrixを行ごとにfilterする\n\nExamples\n\njulia> filter_row(x->isodd(x[1]), [1 2; 2 3])\n1×2 Matrix{Int64}:\n 1  2\n\njulia> filter_row(x->false, [1 2; 2 3])\nSubArray{Int64, 1, Matrix{Int64}, Tuple{Int64, Base.Slice{Base.OneTo{Int64}}}, true}[]\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.union_row-Tuple{Any, Any, Any}","page":"CSVFiles.jl","title":"CSVFiles.union_row","text":"union_row(a1, a2, col)\n\nMatrixをcol列に対してunionする\n\nExamples\n\njulia> union_row([1 2; 2 3], [1 2; 3 3], 1)\n3×2 Matrix{Int64}:\n 1  2\n 2  3\n 3  3\n\njulia> union_row([1 2; 2 3], [1 2; 2 4], 1)\n2×2 Matrix{Int64}:\n 1  2\n 2  3\n\n\n\n\n\n","category":"method"}]
}