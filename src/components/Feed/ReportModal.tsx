import { useState } from "react";
import Modal from "../core/Modal/Modal";
import useStore from "../../store/useStore";
import Button from "../core/Button/Button";

interface ReportModalProps {
  postId: number;
}

const ReportModal: React.FC<ReportModalProps> = ({ postId }) => {
  const addToast = useStore((state) => state.addToast);
  const [openModal, setOpenModal] = useState(false);
  function reportPost() {
    console.log("Reported post with id: ", postId);
    addToast("Post has been reported", "success");
    setOpenModal(false);
  }

  const Footer: React.FC = () => (
    <div className="flex justify-start items-center gap-2">
      <Button
        title="Report it"
        className="hover:border-red-500 bg-gray-200 dark:bg-gray-700"
        onClick={reportPost}
      />
      <Button
        title="Cancel"
        className="hover:border-green-400 bg-gray-200 dark:bg-gray-700"
        onClick={() => setOpenModal(false)}
      />
    </div>
  );

  return (
    <>
      <Button
        title="Report it"
        className="hover:border-red-500 bg-gray-200 dark:bg-gray-700"
        onClick={() => setOpenModal(true)}
      />
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Report Post"
        footer={<Footer />}
      >
        <h1 className="font-bold">Why are you reporting this post?</h1>
        <div className="flex justify-start items-start flex-col  gap-2 m-3">
          <label className="flex justify-start items-center gap-2">
            <input type="checkbox" name="reason" value="spam" /> Spam
          </label>
          <label className="flex justify-start items-center gap-2">
            <input type="checkbox" name="reason" value="inappropriate" />
            Inappropriate
          </label>
          <label className="flex justify-start items-center gap-2">
            <input type="checkbox" name="reason" value="hate-speech" /> Hate
            Speech
          </label>
          <label className="flex justify-start items-center gap-2">
            <input type="checkbox" name="reason" value="violence" /> Violence
          </label>
          <label className="flex justify-start items-center gap-2">
            <input type="checkbox" name="reason" value="other" /> Other
          </label>
        </div>
      </Modal>
    </>
  );
};

export default ReportModal;
