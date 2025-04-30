import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [products, setProducts] = useState([]);
    const [collection, setCollection] = useState([]);
    const [token, setToken] = useState("");

    const navigate = useNavigate();

    /* Função para buscar os dados da coleção */
    const getCollectionData = async () => {
        try {
            const response = await axios.get(`${backendURL}/api/collection/list`);
            if (response.data.success) {
                setCollection(response.data.collection);
            } else {
                toast.error("Erro ao carregar a coleção.");
            }
        } catch (error) {
            console.error("Erro ao buscar coleção:", error);
            toast.error("Erro ao buscar os dados da coleção.");
        }
    };

    useEffect(() => {
        getCollectionData();
    }, []);


    /* Buscar produtos */
    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendURL}/api/product/list`, {
                headers: { token },
            });
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao carregar produtos.");
        }
    };

    /* Buscar dados quando o token for definido */
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (!token && storedToken) {
            setToken(storedToken);
        }
        getProductsData();
        getCollectionData();
    }, [token]);

    const value = {
        products,
        collection,
        setCollection,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        navigate,
        backendURL,
        setToken,
        token,
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;