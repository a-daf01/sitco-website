param ($File)
$content = Get-Content $File -Raw
$original = $content

# Margins
$content = $content -replace '\bml-', 'ms-'
$content = $content -replace '\bmr-', 'me-'

# Padding
$content = $content -replace '\bpl-', 'ps-'
$content = $content -replace '\bpr-', 'pe-'

# Borders (Width/Color)
$content = $content -replace '\bborder-l-', 'border-s-'
$content = $content -replace '\bborder-r-', 'border-e-'
$content = $content -replace '\bborder-l\b', 'border-s'
$content = $content -replace '\bborder-r\b', 'border-e'

# Border Radius
$content = $content -replace '\brounded-l-', 'rounded-s-'
$content = $content -replace '\brounded-r-', 'rounded-e-'
$content = $content -replace '\brounded-l\b', 'rounded-s'
$content = $content -replace '\brounded-r\b', 'rounded-e'

# Text Alignment
$content = $content -replace '\btext-left\b', 'text-start'
$content = $content -replace '\btext-right\b', 'text-end'

# Positioning (Be careful with absolute positioning, but usually start/end is safer for RTL)
# replacing left-0 with start-0, right-0 with end-0 (only simple cases)
$content = $content -replace '\bleft-0\b', 'start-0'
$content = $content -replace '\bright-0\b', 'end-0'

if ($content -ne $original) {
    Set-Content -Path $File -Value $content -Encoding UTF8
    Write-Host "Updated $File"
}
