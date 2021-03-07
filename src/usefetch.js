import {useEffect,useState} from 'react';

const useFetch = (url)=>{
    const [data,setData]=useState(null);  
    const [error,setError]=useState(null);
    const [ispending,setIspending]=useState(true);
    useEffect(()=>{
        const abortcont=new AbortController();

        fetch(url,{signal: abortcont.signal})
        
        .then(res=>{
            if(!res.ok){
                throw Error('problem fetching that data');
            }
            return res.json();
        })
        .then(data=>{
            
            setIspending(false);
            setData(data);
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted');
            }
            else{
                setIspending(false);
                setError(err.message);
                
            }
        })
        return ()=>abortcont.abort();

    },[url]);

    return {data,error,ispending};


}
export default useFetch;