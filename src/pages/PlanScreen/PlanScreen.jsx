import { useEffect, useState } from 'react'
import './PlanScreen.css'
import { getPlans } from '../../firebaseStore'
import { useSelector } from 'react-redux'
import PaystackPop from '@paystack/inline-js'
import { selectUser } from '../../features/userSlice'

const PlanScreen = () => {
    const [plans, setPlans] = useState([])

    const user = useSelector(selectUser)
    const email = user.email

    useEffect(() => {
      getPlans()
      .then(querySnapshot => {
        const plans = {}
        querySnapshot.forEach(async planDoc => {
            plans[planDoc.id] = planDoc.data()
        })
        setPlans(plans)
      })
    }, [])

    console.log(plans);

    const createPlan = (name, interval, amount) => {
        
    }

    const loadCheckout = async (planId, amount, plan_code) => {
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: 'pk_test_1d572abc0ba6e63f370ab9c4c67be04d33992c29',
            amount: amount * 100,
            email,
            onSuccess: (transaction) => {
                let message = `Payment complete! Reference ${transaction.reference}`
                alert(message)
            },
            onCancel: () => {
                alert('You have canceled the transaction!')
            }
        })
    }
    

  return (
    <div className='planScreen'>
        {Object.entries(plans).map(([planId, planData]) => {
            return (
                <div className="planScreen__plan" key={planId}>
                    <div className="planScreen__info" key={planId}>
                        <h5>{planData?.name}</h5>
                        <h6>{planData?.description}</h6>
                    </div>
                    <button onClick={() => loadCheckout(planId, planData?.amount, planData?.plan_code)}>Subscribe</button>
                </div>
            )
        })}
    </div>
  )
}

export default PlanScreen