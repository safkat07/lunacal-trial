import { useState, useEffect } from 'react';

const useTabData = () => {
    const [tabData, setTabData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchTabData = async () => {
        try {
            const response = await fetch('/tabData.json');  
            const data = await response.json();
            setTabData(data);
        } catch (error) {
            setError(error);
            console.error('Error fetching tab data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTabData();
    }, []);

    return [tabData, error, loading];
};

export default useTabData;
