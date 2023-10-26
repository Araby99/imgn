"use client"
import Social from '@/app/components/Social';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default () => {
    const [social, setSocial] = useState();
    const [numbers, setNumbers] = useState()
    useEffect(() => {
        axios.get("/social").then(result => {
            setSocial(result.data)
            let numbers = [];
            for (let i = 0; i < result.data.length; i++) numbers.push(i + 1);
            setNumbers(numbers)
        })
    }, [])
    const updateUI = () => {
        return (
            <div className="flex flex-col gap-10">
                {
                    social?.sort((a, b) => a.index - b.index).map((item, index) => (
                        <Social changeData={changeData} _id={item._id} changeIndex={changeIndex} numbers={numbers} key={index} index={item.index} name={item.name} link={item.link} icon={item.icon} />
                    ))
                }
            </div>
        )
    }
    const changeData = (id, type, data) => {
        let obj = [...social];
        obj.find(o => {
            if (o._id == id) {
                o[type] = data
            }
        })
        setSocial(obj)
    }
    const changeIndex = (id, nextIndex) => {
        let obj = [...social];
        const prev = obj.find(o => o._id == id);
        obj.find((o, i) => {
            if (o.index == nextIndex) {
                obj[i].index = prev.index
                prev.index = nextIndex;
                return true;
            }
        })
        setSocial(obj)
    }
    useEffect(() => {
        updateUI();
    }, [social])
    const [file, setFile] = useState();
    const avatar = useRef();
    const changeAvatar = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            const objectUrl = URL.createObjectURL(e.target.files[0])
            avatar.current.src = objectUrl
        }
    }
    const submit = e => {
        e.preventDefault();
        axios.post("/social", social, { headers: { admin: localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token") } })
            .then(() => {
                toast.success('تم تحديث روابط المنصات !', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(err => {
                toast.error('حدث خطأ، يمكنك معرفة المزيد من الconsole', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(err)
            })
    }
    return (
        <>
            {updateUI()}
            
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
