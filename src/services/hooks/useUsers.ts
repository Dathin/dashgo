import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

async function getUsers () :Promise<User[]> {
    const {data} = await api.get('users');
    const users = data.users.map(({id, name, email, createdAt} )=> ({
        id,
        name,
        email,
        createdAt: new Date(createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }));

    return users;
} 

export function useUsers(){
    return useQuery<User[]>('users', getUsers, {
        staleTime: 1000 * 5 // 5 secondss
    })
}