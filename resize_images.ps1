
Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param (
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Width,
        [int]$Height
    )

    $image = [System.Drawing.Image]::FromFile($InputPath)
    $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graphics.DrawImage($image, 0, 0, $Width, $Height)
    
    $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $image.Dispose()
    $bitmap.Dispose()
    $graphics.Dispose()
    
    Write-Host "Resized $InputPath to $OutputPath ($Width x $Height)"
}

# Resize first image (new one)
Resize-Image -InputPath "public/hero_split_1_hd.jpg" -OutputPath "public/hero_split_1_final.jpg" -Width 1920 -Height 1080

# Resize second image (existing one)
Resize-Image -InputPath "public/hero_split_2.jpg" -OutputPath "public/hero_split_2_final.jpg" -Width 1920 -Height 1080
