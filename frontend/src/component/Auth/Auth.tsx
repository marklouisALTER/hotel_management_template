import {useState} from 'react';

export const useAuth = () =>{

    //get the token
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const token = tokenString ? JSON.parse(tokenString) : null;
        return token;
      }
      

      //For get the user in LocalStorage
      const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        return user;
      }

      //Set the token and user into string
      const [token, setToken] = useState<string | null>(getToken());
      const [user, setUser] = useState<string | null>(getUser());


      //login
    const login = (userData : {user: string, token: string}) =>{
        setUser(userData.user);
        setToken(userData.token);
        sessionStorage.setItem('user', JSON.stringify(userData.user));
        sessionStorage.setItem('token', JSON.stringify(userData.token));
    }


    //logout
    const logout = () => {
        setUser(null);
        setToken(null);
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
    }

    // check if have token
    const isAuthenticated = () => {
        return token !== null && user !== null;
    };

    return{
        user,
        token,
        login,
        logout,
        isAuthenticated,
    }

}