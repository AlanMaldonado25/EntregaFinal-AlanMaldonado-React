# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

useEffect(()=>{
        const fetchData = async()=>{
            try{
                setIsLoading(true);
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? arrayProductos.filter((item) => item.categoria === id) : arrayProductos)
                        },2000);
                });
                setItem(data);
            }catch(error){
                console.log('error',error)
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    },[id])