function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            localStorage.setItem("telefone", tel_formatado);
        }


        function mascara_cep ()
        {
           //limitador
         var cepmascara = document.getElementById("cep").value
            console.log(cepmascara)
          cepmascara=cepmascara.slice(0,10) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(cepmascara)
          document.getElementById("cep").value=cepmascara
     cepmascara=document.getElementById("cep").value.slice(0,10)
            console.log(cepmascara)
           
            //máscara
            var cepmascara = document.getElementById("cep").value
            if (cepmascara[2]!=".")
            {
                if(cepmascara[2]!=undefined)
                {
                    document.getElementById("cep").value=cepmascara.slice(0,2)+"."+cepmascara[2]
                }
            }

            if (cepmascara[6]!="-")
            {
                if(cepmascara[6]!=undefined)
                {
                    document.getElementById("cep").value=cepmascara.slice(0,6)+"-"+cepmascara[6]
                }
            }
            localStorage.setItem("CEP", cepmascara);
        }

        function mascara_cpf ()
        {
           //limitador
         var cpfmascara = document.getElementById("cpf").value
            console.log(cpfmascara)
          cpfmascara=cpfmascara.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(cpfmascara)
          document.getElementById("cpf").value=cpfmascara
     cpfmascara=document.getElementById("cpf").value.slice(0,10)
            console.log(cpfmascara)
           
            //máscara
            var cpfmascara = document.getElementById("cpf").value
            if (cpfmascara[3]!=".")
            {
                if(cpfmascara[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpfmascara.slice(0,3)+"."+cpfmascara[3]
                }
            }
            if (cpfmascara[7]!=".")
            {
                if(cpfmascara[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpfmascara.slice(0,7)+"."+cpfmascara[7]
                }
            }

            if (cpfmascara[11]!="-")
            {
                if(cpfmascara[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpfmascara.slice(0,11)+"-"+cpfmascara[11]
                }
            }
            localStorage.setItem("CPF", cpfmascara);
        }

        function mascara_cnpj ()
        {
           //limitador
         var cnpj_m = document.getElementById("cnpj").value
            console.log(cnpj_m)
          cnpj_m=cnpj_m.slice(0,18) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(cnpj_m)
          document.getElementById("cnpj").value=cnpj_m
     cnpj_m=document.getElementById("cnpj").value.slice(0,10)
            console.log(cnpj_m)
           
            //máscara
            var cnpj_m = document.getElementById("cnpj").value
            if (cnpj_m[2]!=".")
            {
                if(cnpj_m[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,2)+"."+cnpj_m[2]
                }
            }
            if (cnpj_m[6]!=".")
            {
                if(cnpj_m[6]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,6)+"."+cnpj_m[6]
                }
            }

            if (cnpj_m[10]!="/")
            {
                if(cnpj_m[10]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,10)+"/"+cnpj_m[10]
                }
            }
            if (cnpj_m[11]!="0")
            {
                if(cnpj_m[11]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,11)+"0"+cnpj_m[11]
                }
            }
            if (cnpj_m[12]!="0")
            {
                if(cnpj_m[12]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,12)+"0"+cnpj_m[12]
                }
            }
            if (cnpj_m[13]!="0")
            {
                if(cnpj_m[13]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,13)+"0"+cnpj_m[13]
                }
            }
            if (cnpj_m[14]!="1")
            {
                if(cnpj_m[14]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,14)+"1"+cnpj_m[14]
                }
            }
            if (cnpj_m[15]!="-")
            {
                if(cnpj_m[15]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_m.slice(0,15)+"-"+cnpj_m[15]
                }
            }
            localStorage.setItem("CNPJ", cnpj_m);
        }

        function mascara_cod ()
        {
           //limitador
         var codmasc = document.getElementById("codigo").value
            console.log(codmasc)
          codmasc=codmasc.slice(0,20) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(codmasc)
          document.getElementById("codigo").value=codmasc
     codmasc=document.getElementById("codigo").value.slice(0,10)
            console.log(codmasc)
           
            //máscara
            var codmasc = document.getElementById("codigo").value
            if (codmasc[2]!="_")
            {
                if(codmasc[2]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,2)+"_"+codmasc[2]
                }
            }
            if (codmasc[5]!="/")
            {
                if(codmasc[5]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,5)+"/"+codmasc[5]
                }
            }

            if (codmasc[6]!="/")
            {
                if(codmasc[6]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,6)+"/"+codmasc[6]
                }
            }
            if (codmasc[10]!="-")
            {
                if(codmasc[10]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,10)+"-"+codmasc[10]
                }
            }
            if (codmasc[14]!=".")
            {
                if(codmasc[14]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,14)+"."+codmasc[14]
                }
            }
            if (codmasc[15]!="9")
            {
                if(codmasc[15]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,15)+"9"+codmasc[15]
                }
            }
            if (codmasc[16]!=".")
            {
                if(codmasc[16]!=undefined)
                {
                    document.getElementById("codigo").value=codmasc.slice(0,16)+"."+codmasc[16]
                }
            }
            localStorage.setItem("Código", codmasc);
        }

        function pegarDados(){
            var nome = document.getElementById("nome").value;
            localStorage.setItem("nome", nome);
            var endereço = document.getElementById("endereco").value;
            localStorage.setItem("endereço", endereço);
        }

        addEventListener("DOMContentLoaded", ()=>{
            document.getElementById("nome2").innerHTML = localStorage.getItem("nome")
            document.getElementById("endereco2").innerHTML = localStorage.getItem("endereço")
            document.getElementById("cep2").innerHTML = localStorage.getItem("CEP")
            document.getElementById("cpf2").innerHTML = localStorage.getItem("CPF")
            document.getElementById("telefone2").innerHTML = localStorage.getItem("telefone")
            document.getElementById("cnpj2").innerHTML = localStorage.getItem("CNPJ")
            document.getElementById("codigo2").innerHTML = localStorage.getItem("Código")
        })