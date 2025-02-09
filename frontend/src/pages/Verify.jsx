import { useContext, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();

    const success = searchParams.get("success");
    const appointmentId = searchParams.get("appointmentId");

    const { backendUrl, token } = useContext(AppContext);
    const navigate = useNavigate();

    // Memoized function using useCallback
    const verifyStripe = useCallback(async () => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/verifyStripe`,
                { success, appointmentId },
                { headers: { token } }
            );

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }

            navigate("/my-appointments");
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }, [backendUrl, success, appointmentId, token, navigate]);

    useEffect(() => {
        if (token && appointmentId && success) {
            verifyStripe();
        }
    }, [token, appointmentId, success, verifyStripe]); // ✅ Now safe to include verifyStripe

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Verify;
