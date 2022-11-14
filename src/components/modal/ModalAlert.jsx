import { Modal, Button } from "flowbite-react";
import $ from 'jquery'
export const ModalAlert = () => {
  const onClick = () => {
    show = false
    $("#modal").prop("show", true);
  };

  const onClose = () => {
    $("#modal").prop("show", false);
    console.log($("#modal"));
  };
  return (
    <>
      <Modal id="modal" show={true} size="md" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onClick}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={onClose}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
