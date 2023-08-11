import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { api } from "@/src/services/api";

interface User {
    id: string;
    name: string;
    email: string;
    createdAd: string;
}

interface GetUserResponse {
    totalCount: number;
    users: User[]
}
export const getUsers = async (page: number): Promise<GetUserResponse> => {
    const { data, headers } = await api.get('/users', {
        params: {
            page
        }
    });

    const totalCount = Number(headers['x-total-count'])
    const users = data.users.map((user: any) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {
        users,
        totalCount
    }
}

export function useUsers(page: number) {
    return useQuery({
        queryKey: ['users', page], queryFn: () => getUsers(page),
        staleTime: 1000 * 60 * 10, //10 minutos  
        
    })
}