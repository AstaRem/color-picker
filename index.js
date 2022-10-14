
let getColors = document.getElementById("get-colors")
let seedColor = document.getElementById("seed-color")
let colorMode = document.getElementById("color-mode")
let colorCount = document.getElementById("color-count")


getColors.addEventListener("submit", function(event){
    event.preventDefault()
    let seedColorValue = seedColor.value.slice(1)
    let colorModeValue = colorMode.value
    let colorCountValue = colorCount.value
    console.log(seedColorValue)
    console.log(colorModeValue)
    console.log(colorCountValue)

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColorValue}&mode=${colorModeValue}&count=${colorCountValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.image.bare)

        let colorArray = data.colors
        console.log(colorArray)
        console.log(colorArray[0].hex.value)

        document.getElementById("color-scheme").innerHTML = renderColor()

        function renderColor(){
           let htmlString = ""
            for(let individualColor = 0; individualColor < colorArray.length; individualColor++){
                htmlString += `
                <div class="color-individual">
                    <div class="color-visual" style="background-color: ${colorArray[individualColor].hex.value}"></div>
                    <p class="color-value" id="color-1-value">${colorArray[individualColor].hex.value} <br>
                    ${colorArray[individualColor].rgb.value}<br>
                    ${colorArray[individualColor].hsl.value}<br>
                    ${colorArray[individualColor].hsv.value}<br>
                    ${colorArray[individualColor].name.value}
                    
                    </p>

                </div>
    
                `
            }
            return htmlString
        }

    })
})

