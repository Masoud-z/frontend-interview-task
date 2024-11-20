import { useState } from "react";
import Modal from "../core/Modal/Modal";

interface ReportModalProps {
  postId: number;
}

const ReportModal: React.FC<ReportModalProps> = ({ postId }) => {
  const [openModal, setOpenModal] = useState(false);
  function reportPost() {
    console.log("Reported post with id: ", postId);
    setOpenModal(false);
  }

  const Footer: React.FC = () => (
    <div className="flex justify-start items-center gap-2">
      <button
        onClick={reportPost}
        className="px-4 py-2 w-40 rounded bg-gray-200 dark:bg-gray-700 border-2 border-solid border-transparent transition delay-100 ease-linear hover:border-red-500"
      >
        Submit Report
      </button>
      <button
        onClick={() => setOpenModal(false)}
        className="px-4 py-2 w-32 rounded bg-gray-200 dark:bg-gray-700 border-2 border-solid border-transparent transition delay-100 ease-linear hover:border-green-400"
      >
        Cancel
      </button>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="px-4 py-2 w-32 rounded bg-gray-200 dark:bg-gray-700 border border-solid border-transparent transition delay-100 ease-linear hover:border-red-500"
      >
        Report it
      </button>
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
            <input type="checkbox" name="reason" value="inappropriate" />{" "}
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
