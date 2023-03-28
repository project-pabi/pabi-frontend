import React, {FC, useState} from 'react'
import styled from 'styled-components'
import tw from "twin.macro";
import ClearIcon from '@mui/icons-material/Clear';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {status, StatusMap} from "@component/NewInformation/Status.type";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface Props {
  className?: string;
  readonly?: boolean;
  creatable?: boolean;
  tagList: string[];
  createTagItem?: (name: string) => void;
  deleteTagItem?: (index: number, name: string) => void;
  deleteAllTag?: () => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  recommendTag?: string[];
}

interface TagBoxProps {
  readonly?: boolean
}

const Tag: FC<Props> = (props: Props) => {
  const {className, readonly, creatable, tagList} = props;

  const [tagItem, setTagItem] = useState('')

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value.length !== 0 && e.key === 'Enter') {
      submitTagItem()
    }
    props?.onKeyUp?.(e);
    e.preventDefault()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const submitTagItem = () => {
    props.createTagItem?.(tagItem)
    setTagItem('')
  }

  const deleteTagItem = (index: number) => {
    let removeTagList: string[] = [...tagList]
    const removedTag = removeTagList.splice(index, 1);
    props.deleteTagItem?.(index, removedTag[0])
  }

  const deleteAllItem = () => {
    props.deleteAllTag?.();
  }

  return (
      <WholeBox className={className}>

        <TagBox readonly={readonly} className="cancelFloat">
          <div className="    float-left  flex w-[calc(100%-35px)] gap-2
                flex-wrap">
            {tagList.map((tagItem, index) => {
              return (
                  <TagItem key={index}>
                    <Text>{tagItem}</Text>
                    {!readonly && <Button type="button" onClick={() => deleteTagItem(index)}><ClearIcon
                        fontSize="small"></ClearIcon></Button>}
                  </TagItem>
              )
            })}
            {creatable && <TagInput
                readOnly={readonly}
                type='text'
                tabIndex={2}
                onChange={e => setTagItem(e.target.value)}
                value={tagItem}
                onKeyUp={onKeyUp}
                onKeyDown={onKeyDown}
            />}
          </div>
          <button type="button" className="text-primary float-right h-10" onClick={() => deleteAllItem()}><CancelOutlinedIcon
              fontSize="small"></CancelOutlinedIcon></button>
        </TagBox>
        {
            !!(props.recommendTag?.length) &&
            <ul className="flex justify-start gap-2 w-full flex-wrap mt-4">
              {props.recommendTag?.map((tag) => (
                  <li key={tag} className="last:mr-0">
                    <TagItem key={tag}>
                      <Text>{tag}</Text>
                      <Button type="button">
                        <AddOutlinedIcon fontSize="small"></AddOutlinedIcon>
                      </Button>
                    </TagItem>
                  </li>
              ))}
            </ul>
        }
      </WholeBox>
  )
}

interface WholeBoxProps {
  className?: string;
}

const WholeBox = styled.div(({className}: WholeBoxProps) => [
  className && tw`${className}`,
  tw`p-2.5`,
]);

const TagBox = styled.div((props: TagBoxProps) => [
  tw`
      pl-4
      pr-5
      py-3.5
      min-h-[70px]
      bg-gray-100
      rounded-2.5
      border-2
      border-solid
      border-gray-100
    `,
  !props.readonly && tw`focus-within:border-primary`
])

const TagItem = tw.div`
  text-center
  px-4
  py-2.5
  rounded-5
  text-gray-700
  border-solid
  border-gray-400
  border
  hover:border-primary
  hover:text-primary
  hover:border-2
  text-sm
  leading-none
`

const Text = styled.span``

const Button = tw.button`
  w-4
  h-4
  ml-2.5
  text-primary
`


const TagInput = tw.input`
  w-5
  min-w-5
  h-10
  bg-transparent  
  border-none
  outline-none
  cursor-text
  grow
`

export default Tag