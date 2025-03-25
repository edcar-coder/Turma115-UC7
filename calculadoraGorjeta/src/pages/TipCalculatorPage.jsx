import React, { useState } from "react";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import ResultDispley from "../components/ResultDispley/ResultDispley";


function TipCalculator() {
    const [valorConta, setValorConta,] = useState("");
    const [percentualGorjeta, setpercentualGorjeta] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularGorjeta = () => {
        const valor = parseInt(valorConta);
        const valorGorjeta = (valor * parseFloat(percentualGorjeta)) / 100;
        const total = valor + valorGorjeta;
        setResultado({ gorjeta: valorGorjeta, total: total });
    }
    return (
        <>
            <h1> Claculadora de Gorjeta </h1>
            <InputField
                label="valor da conta:"
                value={valorConta}
                onChange={(e) => setValorConta(e.target.value)}
            />
            <h1> Claculadora de Gorjeta</h1>
            <InputField
                label="Porcentagem de Gorjeta (%):"
                value={percentualGorjeta}
                onChange={(e) => setpercentualGorjeta(e.target.value)}
            />
            <Button
                text="Calcular" onClick={calcularGorjeta}
            />
            <ResultDispley gorjeta={resultado.gorjeta} total={resultado.total} />
        </>
    )
}
export default TipCalculator;