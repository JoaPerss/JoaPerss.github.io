# Manual deployment script for GitHub Pages
Write-Host "Building React app..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying to gh-pages branch..."

# Create a temporary directory
$tempDir = "temp-gh-pages"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}

# Clone the repository to temp directory
git clone https://github.com/JoaPerss/JoaPerss.github.io.git $tempDir
Set-Location $tempDir

# Switch to gh-pages branch (create if doesn't exist)
git checkout gh-pages
if ($LASTEXITCODE -ne 0) {
    git checkout --orphan gh-pages
    git rm -rf .
}

# Copy build files
Copy-Item -Path "..\build\*" -Destination "." -Recurse -Force

# Add and commit
git add .
git commit -m "Deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin gh-pages

# Clean up
Set-Location ..
Remove-Item -Recurse -Force $tempDir

Write-Host "Deployment complete!" -ForegroundColor Green
