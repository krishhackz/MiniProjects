//const prompt = require("prompt-sync")();
window.alert("Welcome to Krish Bankz");
var lang=prompt("Select language: 1)English, 2)Hindi, 3)Gujrati");

if(lang==1||lang=="English"||lang=="english"||lang=="ENGLISH"){
var TotalAmount;
var checkbank=prompt("Do you have a Bank Account? (YES/NO): ");
if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"){
    var account=parseInt(prompt("Enter your Account Number: "));
    if(account==123){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 25590;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}₹`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only ₹ 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
                    } else{
                        window.alert("Invalid Amount");
                    }
                } else if(Withdraw==0){
                    window.alert("Withdrawal Amount can't be Zero");
                } else if(Withdraw<0){
                    window.alert("Withdrawal Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                if(Deposite>0){
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}₹`);
                console.log(`Total Amount: ${TotalAmount}₹`);
                }else if(Deposite==0){
                    window.alert("Deposite Amount can't be Zero");
                } else if(Deposite<0){
                    window.alert("Deposite Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 4:
                let TransferAccount = prompt("Enter A/C to transfer: ");
                if(TransferAccount==0){
                    window.alert("Account Number can't be Zero");
                } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                    let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                    if(Balance>=Transfer){
                        TotalAmount=Balance-Transfer;
                        console.log(`Transfer Amount: ${Transfer}₹`);
                        console.log(`Remaining Amount: ${TotalAmount}₹`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
                    }
                } else{
                    window.alert("Account Number can't be in Character");
                }
            break;
            default:
                window.alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==456){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 562900;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}₹`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only ₹ 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
                    } else{
                        window.alert("Invalid Amount");
                    }
                } else if(Withdraw==0){
                    window.alert("Withdrawal Amount can't be Zero");
                } else if(Withdraw<0){
                    window.alert("Withdrawal Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                if(Deposite>0){
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}₹`);
                console.log(`Total Amount: ${TotalAmount}₹`);
                }else if(Deposite==0){
                    window.alert("Deposite Amount can't be Zero");
                } else if(Deposite<0){
                    window.alert("Deposite Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 4:
                let TransferAccount = prompt("Enter A/C to transfer: ");
                if(TransferAccount==0){
                    window.alert("Account Number can't be Zero");
                } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                    let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                    if(Balance>=Transfer){
                        TotalAmount=Balance-Transfer;
                        console.log(`Transfer Amount: ${Transfer}₹`);
                        console.log(`Remaining Amount: ${TotalAmount}₹`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
                    }
                } else{
                    window.alert("Account Number can't be in Character");
                }
            break;
            default:
                window.alert("Please Enter a Number between 1 to 4");
        }
    } else if(account==789){
        let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
        let Balance = 13431;
        switch(user){
            case 1:
                window.alert(`Your Balance is: ${Balance}₹`);
            break;
            case 2:
                let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                if(Withdraw>0){
                    if(Balance>=Withdraw){
                        if(Withdraw%100==0){
                            TotalAmount=Balance-Withdraw;
                            console.log(`Withdrawal Amount: ${Withdraw}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else if(Withdraw%100!=0){
                            window.alert("Only ₹ 100, 500, 200 notes are available");
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw>Balance){
                        console.log("Not Enough Money");
                        console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
                    } else{
                        window.alert("Invalid Amount");
                    }
                } else if(Withdraw==0){
                    window.alert("Withdrawal Amount can't be Zero");
                } else if(Withdraw<0){
                    window.alert("Withdrawal Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 3:
                let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                if(Deposite>0){
                TotalAmount=Balance+Deposite;
                console.log(`Deposite Amount: ${Deposite}₹`);
                console.log(`Total Amount: ${TotalAmount}₹`);
                }else if(Deposite==0){
                    window.alert("Deposite Amount can't be Zero");
                } else if(Deposite<0){
                    window.alert("Deposite Amount can't be Negative");
                } else{
                    window.alert("Invalid Amount, Please enter a numeric value");
                }
            break;
            case 4:
                let TransferAccount = prompt("Enter A/C to transfer: ");
                if(TransferAccount==0){
                    window.alert("Account Number can't be Zero");
                } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                    let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                    if(Balance>=Transfer){
                        TotalAmount=Balance-Transfer;
                        console.log(`Transfer Amount: ${Transfer}₹`);
                        console.log(`Remaining Amount: ${TotalAmount}₹`);
                    } else{
                        console.log("Not Enough Money");
                        console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
                    }
                } else{
                    window.alert("Account Number can't be in Character");
                }
            break;
            default:
                window.alert("Please Enter a Number between 1 to 4");
        }
    } else {
        window.alert("Invalid Account Number");
    }
} else if(checkbank=="no"||checkbank=="NO"||checkbank=="No"){
    let user = parseInt(prompt("Enter 1:Create Account, 2:Exit :"));
    if(user==1){
        let name=prompt("Enter your Name: ");
        let age=parseInt(prompt("Enter your Age: "));
        if(age>=18){
            let DL=prompt("You have Driving License? (Yes/No)");
            if(DL=="Yes"||DL=="yes"||DL=="YES"){
                let adhar=parseInt(prompt("Enter your Adhar Number: "));
                let pan=parseInt(prompt("Enter yout PAN Number: "));
                window.alert("Thankyou for submitting your details, your account will be created soon");
            } else if(DL=="No"||DL=="no"||DL=="NO"){
                window.alert("Sorry, You can't create bank account. Due to you don't have Driving License");
            } else{
                window.alert("Invalid Input of Driving License");
            }
        } else if(age<18){
            window.alert("Sorry, You can't create bank account. Due to you are minor");
        } else{
            window.alert("Invalid Input of Age");
        }
    } else if(user==2){
        window.alert("Visit Again")
    } else{
        window.alert("Please Enter a Number between 1 to 2");
    }
} else{
    window.alert("Please select Yes or No");
}

} else if(lang==2||lang=="Hindi"||lang=="hindi"||lang=="HINDI"){
    var TotalAmount;
    var checkbank=prompt("क्या आपके पास बैंक खाता है? (हां, नहीं): ");
    if(checkbank=="yes"||checkbank=="YES"||checkbank=="Yes"||checkbank=="हां"){
        var account=parseInt(prompt("अपना खाता नंबर दर्ज करें: "));
        if(account==123||account=="१२३"){
            let user = parseInt(prompt("1:शेष राशि जांचें, 2:निकासी, 3:जमा, 4:स्थानांतरण दर्ज करें:"));
            let Balance = 25590;
            switch(user){
                case 1:
                    window.alert(`आपका बैलेंस है: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("निकासी राशि दर्ज करें (उपलब्ध: ₹ १००, ५००, २००): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`निकासी राशि: ${Withdraw}₹`);
                                console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("केवल ₹१००, ५००, २०० के नोट उपलब्ध हैं");
                            } else{
                                window.alert("अमान्य राशि");
                            }
                        } else if(Withdraw>Balance){
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप निकासी लेना चाहते हैं ${Withdraw}₹ लेकिन आपका शेष है ${Balance}₹ है केवल`);
                        } else{
                            window.alert("अमान्य राशि");
                        }
                    } else if(Withdraw==0){
                        window.alert("निकासी राशि शून्य नहीं हो सकती");
                    } else if(Withdraw<0){
                        window.alert("निकासी राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("जमा राशि दर्ज करें: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`जमा राशि: ${Deposite}₹`);
                    console.log(`कुल राशि: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("जमा राशि शून्य नहीं हो सकती");
                    } else if(Deposite<0){
                        window.alert("जमा राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("स्थानांतरण खाता दर्ज करें: ");
                    if(TransferAccount==0){
                        window.alert("खाता संख्या शून्य नहीं हो सकती");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("स्थानांतरण राशि दर्ज करें: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`स्थानांतरण राशि: ${Transfer}₹`);
                            console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                        } else{
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप स्थानांतरण करना चाहते हैं ${Transfer}₹ लेकिन आपका संतुलन ${Balance}₹ है केवल`);
                        }
                    } else{
                        window.alert("खाता संख्या वर्ण में नहीं हो सकती");
                    }
                break;
                default:
                    window.alert("कृपया १ से ४ के बीच कोई संख्या दर्ज करें");
            }
        } else if(account==456){
            let user = parseInt(prompt("1:शेष राशि जांचें, 2:निकासी, 3:जमा, 4:स्थानांतरण दर्ज करें:"));
            let Balance = 562900;
            switch(user){
                case 1:
                    window.alert(`आपका बैलेंस है: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("निकासी राशि दर्ज करें (उपलब्ध: ₹ १००, ५००, २००): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`निकासी राशि: ${Withdraw}₹`);
                                console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("केवल ₹१००, ५००, २०० के नोट उपलब्ध हैं");
                            } else{
                                window.alert("अमान्य राशि");
                            }
                        } else if(Withdraw>Balance){
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप निकासी लेना चाहते हैं ${Withdraw}₹ लेकिन आपका शेष है ${Balance}₹ है केवल`);
                        } else{
                            window.alert("अमान्य राशि");
                        }
                    } else if(Withdraw==0){
                        window.alert("निकासी राशि शून्य नहीं हो सकती");
                    } else if(Withdraw<0){
                        window.alert("निकासी राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("जमा राशि दर्ज करें: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`जमा राशि: ${Deposite}₹`);
                    console.log(`कुल राशि: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("जमा राशि शून्य नहीं हो सकती");
                    } else if(Deposite<0){
                        window.alert("जमा राशि ऋणात्मक नहीं हो सकती");
                    } else{
                        window.alert("अमान्य राशि, कृपया एक संख्यात्मक मान दर्ज करें");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("स्थानांतरण खाता दर्ज करें: ");
                    if(TransferAccount==0){
                        window.alert("खाता संख्या शून्य नहीं हो सकती");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("स्थानांतरण राशि दर्ज करें: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`स्थानांतरण राशि: ${Transfer}₹`);
                            console.log(`बाकी अमाउंट: ${TotalAmount}₹`);
                        } else{
                            console.log("पर्याप्त पैसा नहीं हैं");
                            console.log(`आप स्थानांतरण करना चाहते हैं ${Transfer}₹ लेकिन आपका संतुलन ${Balance}₹ है केवल`);
                        }
                    } else{
                        window.alert("खाता संख्या वर्ण में नहीं हो सकती");
                    }
                break;
                default:
                    window.alert("कृपया १ से ४ के बीच कोई संख्या दर्ज करें");
            }
        } else if(account==789){
            let user = parseInt(prompt("Enter 1:Check Balance, 2:Withdraw, 3:Deposite, 4:Transfer :"));
            let Balance = 13431;
            switch(user){
                case 1:
                    window.alert(`Your Balance is: ${Balance}₹`);
                break;
                case 2:
                    let Withdraw = parseInt(prompt("Enter Withdraw Amount (Available: ₹ 100, 500, 200): "));
                    if(Withdraw>0){
                        if(Balance>=Withdraw){
                            if(Withdraw%100==0){
                                TotalAmount=Balance-Withdraw;
                                console.log(`Withdrawal Amount: ${Withdraw}₹`);
                                console.log(`Remaining Amount: ${TotalAmount}₹`);
                            } else if(Withdraw%100!=0){
                                window.alert("Only ₹ 100, 500, 200 notes are available");
                            } else{
                                window.alert("Invalid Amount");
                            }
                        } else if(Withdraw>Balance){
                            console.log("Not Enough Money");
                            console.log(`You want to Withdraw ${Withdraw}₹ but Your balance is ${Balance}₹ only`);
                        } else{
                            window.alert("Invalid Amount");
                        }
                    } else if(Withdraw==0){
                        window.alert("Withdrawal Amount can't be Zero");
                    } else if(Withdraw<0){
                        window.alert("Withdrawal Amount can't be Negative");
                    } else{
                        window.alert("Invalid Amount, Please enter a numeric value");
                    }
                break;
                case 3:
                    let Deposite = parseInt(prompt("Enter Deposite Amount: "));
                    if(Deposite>0){
                    TotalAmount=Balance+Deposite;
                    console.log(`Deposite Amount: ${Deposite}₹`);
                    console.log(`Total Amount: ${TotalAmount}₹`);
                    }else if(Deposite==0){
                        window.alert("Deposite Amount can't be Zero");
                    } else if(Deposite<0){
                        window.alert("Deposite Amount can't be Negative");
                    } else{
                        window.alert("Invalid Amount, Please enter a numeric value");
                    }
                break;
                case 4:
                    let TransferAccount = prompt("Enter A/C to transfer: ");
                    if(TransferAccount==0){
                        window.alert("Account Number can't be Zero");
                    } else if(!((TransferAccount>="A"&&TransferAccount<="Z")||(TransferAccount>="a"&&TransferAccount<="z"))){
                        let Transfer = parseInt(prompt("Enter Transfer Amount: "));
                        if(Balance>=Transfer){
                            TotalAmount=Balance-Transfer;
                            console.log(`Transfer Amount: ${Transfer}₹`);
                            console.log(`Remaining Amount: ${TotalAmount}₹`);
                        } else{
                            console.log("Not Enough Money");
                            console.log(`You want to Transfer ${Transfer}₹ but Your balance is ${Balance}₹ only`);
                        }
                    } else{
                        window.alert("Account Number can't be in Character");
                    }
                break;
                default:
                    window.alert("Please Enter a Number between 1 to 4");
            }
        } else {
            window.alert("Invalid Account Number");
        }
    } else if(checkbank=="no"||checkbank=="NO"||checkbank=="No"){
        let user = parseInt(prompt("Enter 1:Create Account, 2:Exit :"));
        if(user==1){
            let name=prompt("Enter your Name: ");
            let age=parseInt(prompt("Enter your Age: "));
            if(age>=18){
                let DL=prompt("You have Driving License? (Yes/No)");
                if(DL=="Yes"||DL=="yes"||DL=="YES"){
                    let adhar=parseInt(prompt("Enter your Adhar Number: "));
                    let pan=parseInt(prompt("Enter yout PAN Number: "));
                    window.alert("Thankyou for submitting your details, your account will be created soon");
                } else if(DL=="No"||DL=="no"||DL=="NO"){
                    window.alert("Sorry, You can't create bank account. Due to you don't have Driving License");
                } else{
                    window.alert("Invalid Input of Driving License");
                }
            } else if(age<18){
                window.alert("Sorry, You can't create bank account. Due to you are minor");
            } else{
                window.alert("Invalid Input of Age");
            }
        } else if(user==2){
            window.alert("Visit Again")
        } else{
            window.alert("Please Enter a Number between 1 to 2");
        }
    } else{
        window.alert("Please select Yes or No");
    }
}