                let rs = require ("readline-sync")                     
                let peso = rs.questionFloat ("Qual o seu peso?\n")
                let altura = rs.questionFloat ('Qual a sua altura? Ex: 1.75\n')
                let imc = peso / (altura*altura)

                if (imc < 16.9) {
                    console.log ("Seu IMC é " + imc + " e você está muito abaixo do peso.")
                }   else if  (imc >= 17 && imc <= 18.4) {
                    console.log  ("Seu IMC é " + imc + " e você está abaixo do peso.")
                } 
                    else if (imc >= 18.5 && imc <= 24.9) {
                    console.log ("Seu IMC é " + imc  +" e você está com peso normal.")
                }
                    else if (imc >= 25 && imc <= 29.9) {
                    console.log ("Seu IMC é " + imc + " e você está acima do peso.")
                }   else if (imc >= 30 && imc <= 34.9) {
                    console.log ("Seu IMC é " + imc + " e você está no nível 1 de obesidade.")
                }   else if (imc >= 35 && imc <= 40) {
                    console.log  ("Seu IMC é " + imc + " e você está no nivel 2 de obesidade.")
                }   else if (imc >= 40) {
                    console.log  ( "Seu IMC é " + imc + " e você está no nivel 3 de obesidade.")
                }   else {
                console.log  ("Seu IMC é " + imc)
                }







