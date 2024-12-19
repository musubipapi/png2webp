import { FC, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone/.";

interface DragContainerProps {}

export const DragContainer: FC<DragContainerProps> = ({}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="border-2 border-gray-300 border-dashed rounded-md w-full">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};
