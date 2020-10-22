import { client } from '../http'
import { RULE_CHAIN_URL } from '../constants/url.constants'

const getRuleChains = (name) => client.get(RULE_CHAIN_URL.RULE_CHAINS_URL, { name })

const getRuleChain = (id) => client.get(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/${id}`)

const getForceRuleChain = (id) => client.get(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/${id}/force`)

const getRuleNodeDescriptors = () => client.get(RULE_CHAIN_URL.RULE_NODE_DESCRIPTORS_URL)

const saveRuleChain = (ruleChain) => client.post(RULE_CHAIN_URL.RULE_CHAINS_URL, ruleChain)

const importRuleChain = (ruleChain) => client.post(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/import`, ruleChain)

const updateRuleChain = (ruleChain) => client.put(RULE_CHAIN_URL.RULE_CHAINS_URL, ruleChain)

const updateRuleChainMetadata = (ruleChainMetadata) => client.patch(RULE_CHAIN_URL.RULE_CHAINS_URL, ruleChainMetadata)

const deleteRuleChain = (id) => client.delete(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/${id}`)

const getRuleChainStatistics = (id) => client.get(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/${id}/statistics`)

const deleteRuleChainStatistics = (id) => client.delete(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/${id}/statistics`)

const triggerVirtualButton = (id, nodeId) =>
    client.post(`${RULE_CHAIN_URL.RULE_CHAINS_URL}/${id}/trigger-virtual-button/${nodeId}`)

const describeCronExpression = (json) => client.post(RULE_CHAIN_URL.CRON_EXPRESSION, json)

const testScript = (json) => client.post(RULE_CHAIN_URL.TEST_SCRIPT, json)

export {
    getRuleChains,
    getRuleChain,
    getForceRuleChain,
    getRuleNodeDescriptors,
    saveRuleChain,
    importRuleChain,
    updateRuleChain,
    updateRuleChainMetadata,
    deleteRuleChain,
    getRuleChainStatistics,
    deleteRuleChainStatistics,
    triggerVirtualButton,
    describeCronExpression,
    testScript,
}
