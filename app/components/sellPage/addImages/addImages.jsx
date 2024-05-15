import { Controller } from "react-hook-form"
import styles from "./addimges.module.css"
import { useRef, useState } from "react";
import Image from "next/image";

function AddImages({ control, name, images, setImages }) {
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef(null)

    function seletFiles() {
        fileInputRef.current.click()
    }

    function onFileSelect(event) {
        const files = event.target.files
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split("/")[0] !== "image") continue;
            if (!images.some((e) => e.name === files[i].name)) {
                const render = new FileReader();
                render.readAsDataURL(files[i])
                render.onloadend = () => {
                    setImages((prevImages) => [
                        ...prevImages,
                        {
                            id: Math.random().toString(),
                            name: files[i].name,
                            imgUrl: render.result
                        }
                    ])
                }
            }
        }

    }
    function deleteImage(index) {
        setImages((prevImages) => prevImages.filter((el) => el.id !== index))
    }

    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true)
        event.dataTransfer.dropEffect = "copy"
    }
    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false)
    }
    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false)
        const files = event.dataTransfer.files
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split("/")[0] !== "image") continue;
            if (!images.some((e) => e.name === files[i].name)) {
                const render = new FileReader();
                render.readAsDataURL(files[i])
                render.onloadend = () => {
                    setImages((prevImages) => [
                        ...prevImages,
                        {
                            id: Math.random().toString(),
                            name: files[i].name,
                            imgUrl: render.result
                        }
                    ])
                }
            }
        }
    }

    return <Controller
        name={name}
        control={control}
        render={() => {
            return <div className={styles.imgContainer}>
                <div className={styles.dragArea} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                    {
                        isDragging ?
                            (<span className={styles.selectText}>Drag images here</span>) :
                            (<> <span className={styles.selectText}>Drag & Drop images here or </span>{" "}
                                <span className={styles.select} role="button" onClick={seletFiles}>
                                    Browse
                                </span></>)
                    }
                    <input
                        accept='image/*'
                        type="file"
                        name="file"
                        className={styles.file}
                        ref={fileInputRef}
                        onChange={onFileSelect}
                        multiple
                    />
                </div>
                <div className={styles.container}>
                    {
                        images.map(image => {
                            return <div key={image.id} className={styles.image}>
                                <span className={styles.delete} onClick={() => deleteImage(image.id)}>&times;</span>
                                <Image
                                    priority
                                    src={image.imgUrl}
                                    fill
                                    alt={image.name}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        })
                    }
                </div>
            </div>
        }
        }
    />
}

export default AddImages