import {
  arrow,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions,
  useRole
} from '@floating-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ElementType, ReactNode, useId, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  renderPopover: ReactNode
  className?: string
  as?: ElementType
}
function Popover({ children, renderPopover, className, as: Element = 'div' }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef(null)
  // Tách các popover thành từng cụm riêng lẻ
  const popoverId = useId()
  const { x, y, strategy, refs, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(5), flip(), shift(), arrow({ element: arrowRef })],
    placement: 'bottom-end'
  })
  const hover = useHover(context, { move: true, handleClose: safePolygon() })
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, role])
  return (
    <Element id={popoverId} className={className} ref={refs.setReference} {...getReferenceProps()}>
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              {...getFloatingProps()}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <FloatingArrow ref={arrowRef} context={context} className='!bottom-[99%] z-10 fill-white' />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}

export default Popover
