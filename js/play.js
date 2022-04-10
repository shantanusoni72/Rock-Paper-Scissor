function play() {
    const things = ["rock", "paper", "scissor"]
    var result = {}
    var Awinner = 0
    var Bwinner = 0
    var Cwinner = 0
    var Dwinner = 0
    for (let i = 1; i <= 50; i++) {
        var a = things[Math.floor(Math.random() * 3)]
        var b = things[Math.floor(Math.random() * 3)]
        var c = things[Math.floor(Math.random() * 3)]
        var d = things[Math.floor(Math.random() * 3)]
        if ((a == 'scissor' && b == 'paper') || (a == 'stone' && b == 'scissor') || (a == 'paper' && b == 'stone')) {
            //winner A
            if ((c == 'scissor' && d == 'paper') || (c == 'stone' && d == 'scissor') || (c == 'paper' && d == 'stone')) {
                //winner C
                if ((a == 'scissor' && c == 'paper') || (a == 'stone' && c == 'scissor') || (a == 'paper' && c == 'stone')) {
                    //Final winner A
                    Awinner += 1
                    result["Iteration"+i] = {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
                else {
                    //Final winner C
                    Cwinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
            }
            else {
                //winner D
                if ((a == 'scissor' && d == 'paper') || (a == 'stone' && d == 'scissor') || (a == 'paper' && d == 'stone')) {
                    //Final winner A
                    Awinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
                else {
                    //Finall winner D
                    Dwinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
            }
        }
        else {
            //winner B
            if ((c == 'scissor' && d == 'paper') || (c == 'stone' && d == 'scissor') || (c == 'paper' && d == 'stone')) {
                //winner C
                if ((b == 'scissor' && c == 'paper') || (b == 'stone' && c == 'scissor') || (b == 'paper' && c == 'stone')) {
                    //Finall winner B
                    Bwinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
                else {
                    //Final winner C
                    Cwinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
            }
            else {
                //winner D
                if ((b == 'scissor' && d == 'paper') || (b == 'stone' && d == 'scissor') || (b == 'paper' && d == 'stone')) {
                    //Final winner B
                    Bwinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
                else {
                    //Final winner D
                    Dwinner += 1
                    result["Iteration"+i]= {
                        "Player_1_Score": Awinner,
                        "Player_2_Score": Bwinner,
                        "Player_3_Score": Cwinner,
                        "Player_4_Score": Dwinner,
                    }
                    //result += 'Iteration ' + i + ' A(' + Awinner + ') ' + 'B(' + Bwinner + ') ' + 'C(' + Cwinner + ') ' + 'D(' + Dwinner + ')<br>'
                }
            }
        }
        if(a == b) {
            Awinner += 1
            Bwinner += 1
        }
        if(c == d) {
            Cwinner += 1
        }
    }
    return result
}

module.exports = { play }