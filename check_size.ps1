Add-Type -AssemblyName System.Drawing
$path = 'C:\Users\Pium\source\PiumHomepage\PiumHomepage\public\메인슬라이드\사인-01.jpg'
$img = [System.Drawing.Image]::FromFile($path)
Write-Output "Width: $($img.Width)"
Write-Output "Height: $($img.Height)"
$img.Dispose()
