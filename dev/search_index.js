var documenterSearchIndex = {"docs":
[{"location":"#CSVFiles.jl","page":"CSVFiles.jl","title":"CSVFiles.jl","text":"","category":"section"},{"location":"","page":"CSVFiles.jl","title":"CSVFiles.jl","text":"Modules = [CSVFiles]\nPages   = [\"io.jl\", \"matrix.jl\"]","category":"page"},{"location":"#CSVFiles.eachrow_csv-Tuple{IO}","page":"CSVFiles.jl","title":"CSVFiles.eachrow_csv","text":"eachrow_csv(io::IO; delim=',', ops...)\neachrow_csv(path::AbstractString; delim=',', encoding=enc\"utf-8\", ops...)\n\njulia> writecsv(\"test.csv\", [1 2;3 4])\n\njulia> eachrow_csv(\"test.csv\") |> collect\n2-element Vector{Matrix{Float64}}:\n [1.0 2.0]\n [3.0 4.0]\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.readcsv-Union{Tuple{T}, Tuple{IO, Type{Matrix{T}}}} where T","page":"CSVFiles.jl","title":"CSVFiles.readcsv","text":"readcsv(io::IO, ::Type{Matrix{T}}; delim=',', ops...)::Matrix{T} where {T}\nreadcsv(io::IO, ::Type{Matrix}; delim=',', ops...)\nreadcsv(io::IO; delim=',', ops...)\nreadcsv(io::IO, ::Type{DataFrame}, T; delim=',', ops...)::DataFrame\nreadcsv(io::IO, ::Type{DataFrame}; delim=',', ops...)\nreadcsv(path::AbstractString, T; delim=',', encoding=enc\"utf-8\", ops...)\nreadcsv(path::AbstractString; delim=',', encoding=enc\"utf-8\", ops...)\nreadcsv(path::AbstractString, ::Type{DataFrame}, T; delim=',', encoding=enc\"utf-8\", ops...)\n\nExamples\n\njulia> readcsv(IOBuffer(\"1,2\\n3,4\"), Matrix{Int})\n2×2 Matrix{Int64}:\n 1  2\n 3  4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.writecsv-Tuple{Any, Any, Any}","page":"CSVFiles.jl","title":"CSVFiles.writecsv","text":"writecsv(path, mat, header)\nwritecsv(iopath, mat)\n\nExamples\n\njulia> writecsv(\"testh.csv\", [1 2;3 4], [:a, :b])\n\njulia> readcsv(\"testh.csv\")\n3×2 Matrix{Any}:\n  \"a\"   \"b\"\n 1     2\n 3     4\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.filter_row-Tuple{Any, Any}","page":"CSVFiles.jl","title":"CSVFiles.filter_row","text":"filter_row(f, a)\n\nMatrixを行ごとにfilterする\n\nExamples\n\njulia> filter_row(x->isodd(x[1]), [1 2; 2 3])\n1×2 Matrix{Int64}:\n 1  2\n\njulia> filter_row(x->false, [1 2; 2 3])\nSubArray{Int64, 1, Matrix{Int64}, Tuple{Int64, Base.Slice{Base.OneTo{Int64}}}, true}[]\n\n\n\n\n\n","category":"method"},{"location":"#CSVFiles.union_row-Tuple{Any, Any, Any}","page":"CSVFiles.jl","title":"CSVFiles.union_row","text":"union_row(a1, a2, col)\n\nMatrixをcol列に対してunionする\n\nExamples\n\njulia> union_row([1 2; 2 3], [1 2; 3 3], 1)\n3×2 Matrix{Int64}:\n 1  2\n 2  3\n 3  3\n\njulia> union_row([1 2; 2 3], [1 2; 2 4], 1)\n2×2 Matrix{Int64}:\n 1  2\n 2  3\n\n\n\n\n\n","category":"method"}]
}
