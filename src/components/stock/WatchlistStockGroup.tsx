import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import { Stock } from '../../lib/api/types'
import { sky010 } from '../../lib/styles/colors'
import {
  CompanyName,
  StockListGroup,
  StockListItem,
  StockName,
  StockPrice,
  UpDownRate,
} from '../../lib/styles/stockList'
import { useRootState } from '../common/hooks/useRootState'
import { selectAvStock } from '../../selectors/stockSelectors'
import { SignIcon } from './SignIcon'
import { useMemo } from 'react'
import mobileViewSlice from '../../reducers/Slices/mobileView'
import { useDispatch } from 'react-redux'

interface StockListGroupProps {
  stock: Stock
}

export function WatchListStockGroup({ stock }: StockListGroupProps) {
  const history = useHistory()
  const memoizeSelectAvStock = useMemo(selectAvStock, [])
  const avStock = useRootState((state) => memoizeSelectAvStock(state, stock))
  const dispatch = useDispatch()
  const { closeMoblieModal } = mobileViewSlice.actions
  return (
    <NewStockListGroup
      onClick={() => {
        dispatch(closeMoblieModal())
        history.push(`/stock/${avStock.stock.cashTagName}`)
      }}
    >
      <StockListItem>
        <StockName>{avStock.title}</StockName>
        {avStock.hasPrice && <StockPrice>{avStock.latest}</StockPrice>}
      </StockListItem>
      <StockListItem>
        <CompanyName>{avStock.description}</CompanyName>
        {avStock.hasPrice && (
          <UpDownRate>
            <SignIcon sign={avStock.sign} isSmall={true} />
            <RateLabel color={avStock.textColor}>
              {avStock.change} ({avStock.changePercent}%)
            </RateLabel>
          </UpDownRate>
        )}
      </StockListItem>
    </NewStockListGroup>
  )
}

const NewStockListGroup = styled(StockListGroup)`
  row-gap: 4px;
  cursor: pointer;
  :hover {
    background-color: ${sky010};
  }
`

const RateLabel = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  white-space: nowrap;
`
