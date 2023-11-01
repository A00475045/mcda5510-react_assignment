import { useEffect, useState } from "react";
import cityImage from "./../public/Halifax-Downtown.jpg";
import cold from "./../public/cold.png";
import mild from "./../public/mild.png";
import sunny from "./../public/sunny.png";


const converter = (temp, to) => {

    if (to === "F") return ((temp - 273.15) * 9 / 5) + 32;
    if (to === "C") return (temp - 273.15);

    return temp;
}

const url = (lat, lon) => {

    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a256f84b5a84a1431164d0ed7eab26ab`
}

const MyCity = () => {

    const [temp, setTemp] = useState(18);
    const [unit, setUnit] = useState("C");

    useEffect(() => {
        fetch(url(44.651070, -63.582687)).then((res) => {
            res.json().then((resp) => {
                console.log(resp);
                setTemp(resp.main.temp)
                setTemp(parseFloat(converter(resp.main.temp, unit)).toFixed(2));
            })
        }).catch((err) => {
            console.log(err)
        })

    }, [unit])

    return (
        <div className="outlet">
            <div className="city-container">
                <div className="city-picture-container">
                    <img src={cityImage} alt="Image of Halifax Downtown" className="city-picture" />

                </div>
                <div className="about-city">

                    <div className="para">
                        <h4>I live in Halifax, NS</h4>
                        Halifax is the capital and largest city of Nova Scotia, Canada, known for its rich maritime heritage and stunning Halifax Harbour. The city boasts a blend of historical sites, a vibrant arts and culture scene, making it an attractive destination for both tourists and residents.
                    </div>

                    <div style={{ display: "flex", marginTop: 10 }}>
                        <div style={{}}>
                            <div className="temp">{temp}°{unit}</div>
                            <button className="change-to" onClick={() => setUnit((unit === "C") ? "F" : "C")}>Change to °{(unit === "C") ? "F" : "C"}</button>
                        </div>
                        <div style={{}}>
                            {((unit === "C") ? ((temp <= 10) ? true : false) : ((converter(temp, "C") <= 10) ? true : false)) && <img src={cold} alt="cold wheather icon" width={45} />}
                            {((unit === "C") ? ((temp > 10 && temp < 20) ? true : false) : ((converter(temp, "C") > 10 && converter(temp, "C") < 20) ? true : false)) && <img src={mild} alt="mild wheather icon" width={45} />}
                            {((unit === "C") ? ((temp > 10) ? true : false) : ((converter(temp, "C") > 20) ? true : false)) && <img src={sunny} alt="sunny wheather icon" width={45} />}


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyCity;