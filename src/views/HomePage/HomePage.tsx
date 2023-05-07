import './HomePage.less'
import { Button } from 'ant-design-vue'
import { onMounted, reactive, defineComponent } from 'vue'
import GlMenu from './GlMenu'
import { useTest } from '../../hooks'

const HomePage = defineComponent({
  name: 'HomePage',
  setup (props, ctx) {
    const obj = reactive({ count: 0 })
    onMounted(
      () => {
        console.log('vue文档是真的FW')
      }
    )
    useTest()
    const handleTest = () => {
      console.log(111)
      obj.count++
    }

    console.log(props, ctx)

    return () => {
      return (
        (
          <div class='container'>
            <Button class='test'
              type='primary'
              onClick={handleTest}>
              1231
            </Button>
            <div class='test1 p-0'>
              {obj.count}
            </div>
            <div>
              <GlMenu test="123"/>
            </div>
          </div>
        )
      )
    }
  }

})

export default HomePage
