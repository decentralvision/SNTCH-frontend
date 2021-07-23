/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
  icon: IconProp
}

const ProjectCard = ({ icon, link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    className="align-text-top align-top"
    sx={{
      
      width: `100%`,
      boxShadow: `lg`,

      textDecoration: `none`,
      borderRadius: `lg`,

      px: 4,
      py: [3,4],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >    
      <FontAwesomeIcon icon={icon} size='4x' />
  <div
  sx={{

    textTransform: `uppercase`,
    letterSpacing: `wide`,
    
    pt: 4,
    py: [2,3],
    fontSize: [ 4, 5, 6],
    fontWeight: `medium`,
    lineHeight: 1,
  }}
>


{title}
</div>

    <div 
    className="inline-block align-bottom align-text-bottom"
    sx={{ paddingBottom:`20px`, opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }} 
    >
    {children}

    </div>

  </a>
)

export default ProjectCard
