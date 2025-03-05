import Giscus from '@giscus/react'
import * as React from 'react'

const id = 'inject-comments'

const Comments = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id={id} className='w-full'>
      {mounted ? (
        <Giscus
          id={id}
          repo='ballv12/ballv12.github.io'
          repoId='R_kgDOKeudTw'
          category='Announcements'
          categoryId='DIC_kwDOKeudT84Cch4W'
          mapping='title'
          reactionsEnabled='1'
          emitMetadata='0'
          inputPosition='top'
          lang='zh-CN'
          loading='lazy'
          theme='dark'
        />
      ) : null}
    </div>
  )
}

export default Comments
