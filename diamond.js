
window.onload = () => 
{
    document.querySelector('#excuse').innerHTML = generateExcuse();
    console.log('Hello'); 
    
}; 

    let generateExcuse = () => { 

        let pronoun = ['My', 'The']; 
        let who = ['priest','mom','dog','Elvis'];
        let action = ['ate','took','wrapped','broke'];
        let what = ['my pizza','my homework', 'telescope','drums']; 
        
        
        let pronounindex = Math.floor(Math.random() * pronoun.length);
        let whoindex = Math.floor(Math.random() * who.length);
        let actionindex = Math.floor(Math.random() * action.length);
        let whatindex = Math.floor(Math.random() * what.length); 
        
        return pronoun[pronounindex]+" "+who[whoindex]+" "+action[actionindex]+" "+what[whatindex];
        
};
