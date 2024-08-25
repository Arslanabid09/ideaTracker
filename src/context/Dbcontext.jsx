import { createContext,useContext,useEffect,useState } from "react";
import { databases } from "../Appwrite/Appwrite";
import { ID, Query } from "appwrite";
 import { useNavigate } from "react-router-dom";

export const databasesId = "66c643b30015aaca8db4";
export const collectionId = "66c643de0026565910e4";

const IdeaContext = createContext();

export const useIdea = ()=>{
    return useContext(IdeaContext);
}

export  const IdeaProvider = (props)=>{
    const [ideas,setIdeas] = useState([])
    let navigate = useNavigate();

    const AddIdea = async(idea)=>{
        let newIdea = await databases.createDocument(
            databasesId,
            collectionId,
            ID.unique(),
            idea
        );
        setIdeas([...ideas,newIdea]);
        // setIdeas((prev)=>[...prev,newIdea]);
        console.log(newIdea.id);
        if(newIdea){
            navigate('/ideas')
        }
        
    }
    const remove = async(id)=>{
        let del =await databases.deleteDocument(databasesId,collectionId,id)
        setIdeas(ideas.filter((idea)=> idea.$id !== id))
        // setIdeas((prev)=> prev.filter((idea)=> idea.$id !== id))
        await init();
    }
    const init = async()=>{
        try {
            const response = await databases.listDocuments(databasesId,collectionId,
                [Query.orderDesc("$createdAt"),Query.limit(10)]
            );
            setIdeas(response.documents)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        init();
    },[])
    return (
        <IdeaContext.Provider value={{current:ideas,AddIdea,remove,init}}>
            {props.children}
        </IdeaContext.Provider>
    )
}