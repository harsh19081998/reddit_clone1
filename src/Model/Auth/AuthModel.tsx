import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModelAtom';
import AuthInputs from './AuthInputs';

const AuthModel:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
    return(
        <>
            <Modal closeOnOverlayClick={false} isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {modalState.view == "login" && "Login"}
                    {modalState.view == "signup" && "Sign Up"}
                    {modalState.view == "resetPassword" && "Reset Password"}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    pb={6}
                >
                    <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    width="70%"
                    >
                        
                           {//<OAuthButtons />
                            <AuthInputs/>
                            //<ResetPassword /> 
                        }
                    </Flex>
                </ModalBody>
            </ModalContent>
            </Modal>
        </>
    );
}
export default AuthModel;