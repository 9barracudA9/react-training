import React, {useEffect, useState} from 'react';
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import Input from "./Input";
import User from "./User";
import MainBtn from "./MainBtn";

const Inviter = () => {

    const [users, setUsers] = useState([])
    const [invitedUsers, setInvitedUsers] = useState([])
    const [currentValue, setCurrentValue] = useState('')
    const [modalActive, setModalActive] = useState(false)
    const getUsers = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users')
            const parsedResponse = await response.json()
            return setUsers(parsedResponse.data)

        } catch (err) {
            console.warn(err)
            alert('Data is not fetched')

        }
    }
    useEffect(() => {
        getUsers()
    }, [])


    const showValue = (e) => {
        setCurrentValue(e.target.value)
    }
    const invitedHandler = (id) => {
        const isInvited = invitedUsers.includes(id)
        if (isInvited) {
            setInvitedUsers(prevState => prevState.filter((itemId) => itemId !== id))
        } else {
            setInvitedUsers((prevState) => [...prevState, id])
        }

    }
    return (


        <><Modal children={modalActive ? <ModalBody number={invitedUsers.length}/> : null}
                 active={modalActive}
                 setActive={() => setModalActive(false)}
        />

            <div
                className='flex flex-col justify-between items-center bg-blue-300 border-2 border-white w-[450px] rounded-2xl px-4 py-2 my-0 mx-auto '>
                <h1 className='font-bold text-2xl text-cyan-950  italic text-center'>
                    Invite people!
                </h1>
                <Input onChange={showValue}
                       value={currentValue}
                />
                <ul className='mt-[40px] w-[100%]'>
                    {
                        users.filter((item) => {
                            const fullName = item.first_name.toLowerCase() + item.last_name.toLowerCase()
                            if (fullName.toLowerCase().includes(currentValue) || item.email.toLowerCase().includes(currentValue)) {
                                return true
                            }
                        }).map((item) => <User {...item}
                                               key={item.id}
                                               invitedHandler={invitedHandler}
                                               isInvited={invitedUsers.includes(item.id)}
                        />)
                    }
                </ul>

                <MainBtn onClick={() => setModalActive(true)} text='Invite'/>
            </div>
        </>
    );
};

export default Inviter;