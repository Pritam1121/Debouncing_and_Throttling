// Story: 
    // like google page user tyr to serch "what is javascript" 
    //     google search to the API =>
    //     w
    //     wh 
    //     wha
    //     what
    //     what 'space'
    //     what i
    //     what is 
    //     what 'space'
    //     what is j
    //     what is ja
    //     what is jav
    //     what is java
    //     what is javas
    //     what is javasc
    //     what is javascr
    //     what is javascri
    //     what is javascrp
    //     what is javascript 

    //     then search

    //     in this senario API call the 18 times. this is the very bad and very slow user interface and not server frendlly.

    //     solution for this problem user try to serch this "what is javascript" . user after some wait then call the API to broswer.
    //     if after this line "what is javascript" user wait for 2 second and agint added some text like  "what is javascript and typescript"
    //     then another one API. in this senario broswer hit the only 2 API calls. and this is the better aproch. this called as debounce.    
    
    //     simple word (user specified number of seconds ke liye kuch bhi intruotion nhi karta hai typing mai to he API call hogi other wise timer ko reset kar denge)


// Normal Way
    // const serch =(query) =>{
    //     console.log(`Serching for the`, query);
    // }

    // serch('J')
    // serch('Ja')
    // serch('Jav')
    // serch('Java')
    // serch('Javas')
    // serch('Javasc')
    // serch('Javascr')
    // serch('Javascri')
    // serch('Javascrip')
    // serch('Javascript')

    // Importnat => API call the 10 times



    //  Debouce Method 
    function debounce(fn ,delay){
        let timerId;

        return function(...args){
            clearTimeout(timerId);

            timerId = setTimeout(()=>{
                fn(...args)
            }, delay);
        };
    }

       const serach =(query) =>{
        console.log(`Serching for the`, query);
    }

const serchWithDebounce = debounce(serach, 1000);


    serchWithDebounce('J')
    serchWithDebounce('Ja')
    serchWithDebounce('Jav')
    serchWithDebounce('Java')
    serchWithDebounce('Javas')
    serchWithDebounce('Javasc')
    serchWithDebounce('Javascr')
    serchWithDebounce('Javascri')
    serchWithDebounce('Javascrip')
    serchWithDebounce('Javascript')

    // Important => API call only one time
    output is Serching for the Javascript