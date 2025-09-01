import React from 'react'
import Form from 'next/form'

function ModelPage() {
  return (
    <div style={{marginTop: '4rem',
        fontSize: '1rem',
    }} className='categoriesSection'>
        <section className='categoryHeader'>
            <h2>3D Models</h2>
            <Form action="/3d-models/">
                <input 
                type="text" 
                name="query" 
                placeholder="search for a model" />
            </Form>
        </section>
        <section>

        </section>
      <h1>Hello world Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi velit temporibus nisi iste error id impedit minima sint aut, cupiditate laudantium mollitia repellendus non ab deleniti consectetur deserunt veritatis! Tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, porro? Beatae fugit dolorum autem excepturi voluptate sed id dolores porro eligendi, hic unde in ea, repudiandae aliquam esse quibusdam! Vero.</h1>
    </div>
  )
}

export default ModelPage
