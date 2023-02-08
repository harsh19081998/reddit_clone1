import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../atoms/authModelAtom';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModel:React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));

    const toggleView = (view: string) => {
        setModalState({
          ...modalState,
          view: view as typeof modalState.view,
        });
      };

    return(
        <>
            <Modal closeOnOverlayClick={false} isOpen={modalState.open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader display="flex" flexDirection="column" alignItems="center">
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
                        <OAuthButtons />
                        <Text color="gray.500" fontWeight={700}>
                            OR
                        </Text>
                        <AuthInputs toggleView={toggleView} />
                             {
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