import React from 'react'
import appConfig from '~/utils/app.config'

function Footer() {
  // TODO serach obj
  const user = appConfig.appAuthor

  return (
    <footer className=" fixed bottom-0 left-0 right-0 pt-6">
      <div className=" flex justify-center text-sm items-center p-3 bg-primary text-text-white">
        <div>
          <span className="">Made with ❤️</span>
          <span className="mx-1">
            by
            <span
              className=" ml-1 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/${user}`)
                }
              }}
            >
              {user}
            </span>
          </span>
        </div>

        <a
          href={appConfig.appHome}
          className="  text-text-white hover:text-white absolute right-2 text-xs flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="icon-[icon-park-outline--github] mr-1 text-sm "></i>
          {' '}
          项目代码
        </a>
      </div>
    </footer>
  )
}

export default Footer
