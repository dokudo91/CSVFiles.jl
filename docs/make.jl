using Documenter
using CSVFiles
DocMeta.setdocmeta!(CSVFiles, :DocTestSetup, :(using CSVFiles, DataFrames); recursive=true)
makedocs(
    sitename = "CSVFiles",
    format = Documenter.HTML(),
    modules = [CSVFiles]
)
deploydocs(
    repo = "github.com/dokudo91/CSVFiles.jl.git",
)