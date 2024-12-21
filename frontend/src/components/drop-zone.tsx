import { FC, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone/.";
import { SelectFile } from "../../wailsjs/go/main/App";

interface DragContainerProps {}

export const DragContainer: FC<DragContainerProps> = ({}) => {
  const onDrop = async () => {
    const selectedFile = await SelectFile();
    console.log(selectedFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="border-2 border-gray-300 border-dashed rounded-md w-full">
      {/* <div {...getRootProps()}> */}
      {/* <input {...getInputProps()} /> */}
      {/* {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )} */}
      {/* </div> */}
      <div>
        <button onClick={() => onDrop()}>Select File</button>
      </div>
    </div>
  );
};
function OpenFileDialog(arg0: {
  title: string;
  filters: { displayName: string; pattern: string }[];
}) {
  throw new Error("Function not implemented.");
}
