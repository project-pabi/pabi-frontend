import React, {FC, useState} from 'react'
import styled from 'styled-components'
import tw from "twin.macro";
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  className?: string
  readonly?: boolean
  tagList: string[]
  setTagList: React.Dispatch<React.SetStateAction<string[]>>
  tagRemoveEvent?: (index: number, name: string) => void
}

interface TagBoxProps {
  readonly?: boolean
}

const Tag: FC<Props> = ({className, readonly, tagList, setTagList, tagRemoveEvent}) => {
  const [tagItem, setTagItem] = useState('')

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).value.length !== 0 && e.key === 'Enter') {
      submitTagItem()
    }
    e.preventDefault()
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  const submitTagItem = () => {
    let updatedTagList: string[] = [...tagList]
    updatedTagList.push(tagItem)
    setTagList(updatedTagList)
    setTagItem('')
  }

  const deleteTagItem = (index: number) => {
    console.log(index)
    let removeTagList: string[] = [...tagList]
    const removedTag = removeTagList.splice(index, 1);
    setTagList(removeTagList)
    tagRemoveEvent && tagRemoveEvent(index, removedTag[0])
  }

  return (
      <WholeBox className={className}>
        <TagBox readonly={readonly}>
          {tagList.map((tagItem, index) => {
            return (
                <TagItem key={index}>
                  <Text>{tagItem}</Text>
                  {!readonly && <Button type="button" onClick={() => deleteTagItem(index)}><ClearIcon
                      fontSize="small"></ClearIcon></Button>}
                </TagItem>
            )
          })}
          {!readonly && <TagInput
              readOnly={readonly}
              type='text'
              tabIndex={2}
              onChange={e => setTagItem(e.target.value)}
              value={tagItem}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
          />}
        </TagBox>
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
      flex
      flex-wrap
      gap-2
      px-4
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
  text-primary
  border-solid
  border-primary
  border-2
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
  bg-transparent  
  border-none
  outline-none
  cursor-text
  grow
`

export default Tag