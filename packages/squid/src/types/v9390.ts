import type { Result, Option } from './support';

export interface Timepoint {
  height: number;
  index: number;
}

export type Call =
  | Call_System
  | Call_Babe
  | Call_Timestamp
  | Call_Indices
  | Call_Balances
  | Call_Session
  | Call_Grandpa
  | Call_ImOnline
  | Call_Democracy
  | Call_Council
  | Call_TechnicalCommittee
  | Call_PhragmenElection
  | Call_TechnicalMembership
  | Call_Treasury
  | Call_Claims
  | Call_Utility
  | Call_Identity
  | Call_Society
  | Call_Recovery
  | Call_Vesting
  | Call_Scheduler
  | Call_Proxy
  | Call_Multisig
  | Call_Preimage
  | Call_Bounties
  | Call_ChildBounties
  | Call_Tips
  | Call_Nis
  | Call_NisCounterpartBalances
  | Call_Configuration
  | Call_ParasShared
  | Call_ParaInclusion
  | Call_ParaInherent
  | Call_Paras
  | Call_Initializer
  | Call_Dmp
  | Call_Ump
  | Call_Hrmp
  | Call_ParasDisputes
  | Call_ParasSlashing
  | Call_Registrar
  | Call_Slots
  | Call_Auctions
  | Call_Crowdloan
  | Call_XcmPallet
  | Call_Beefy
  | Call_ParasSudoWrapper
  | Call_AssignedSlots
  | Call_ValidatorManager
  | Call_StateTrieMigration
  | Call_Sudo;

export interface Call_System {
  __kind: 'System';
  value: SystemCall;
}

export interface Call_Babe {
  __kind: 'Babe';
  value: BabeCall;
}

export interface Call_Timestamp {
  __kind: 'Timestamp';
  value: TimestampCall;
}

export interface Call_Indices {
  __kind: 'Indices';
  value: IndicesCall;
}

export interface Call_Balances {
  __kind: 'Balances';
  value: BalancesCall;
}

export interface Call_Session {
  __kind: 'Session';
  value: SessionCall;
}

export interface Call_Grandpa {
  __kind: 'Grandpa';
  value: GrandpaCall;
}

export interface Call_ImOnline {
  __kind: 'ImOnline';
  value: ImOnlineCall;
}

export interface Call_Democracy {
  __kind: 'Democracy';
  value: DemocracyCall;
}

export interface Call_Council {
  __kind: 'Council';
  value: CouncilCall;
}

export interface Call_TechnicalCommittee {
  __kind: 'TechnicalCommittee';
  value: TechnicalCommitteeCall;
}

export interface Call_PhragmenElection {
  __kind: 'PhragmenElection';
  value: PhragmenElectionCall;
}

export interface Call_TechnicalMembership {
  __kind: 'TechnicalMembership';
  value: TechnicalMembershipCall;
}

export interface Call_Treasury {
  __kind: 'Treasury';
  value: TreasuryCall;
}

export interface Call_Claims {
  __kind: 'Claims';
  value: ClaimsCall;
}

export interface Call_Utility {
  __kind: 'Utility';
  value: UtilityCall;
}

export interface Call_Identity {
  __kind: 'Identity';
  value: IdentityCall;
}

export interface Call_Society {
  __kind: 'Society';
  value: SocietyCall;
}

export interface Call_Recovery {
  __kind: 'Recovery';
  value: RecoveryCall;
}

export interface Call_Vesting {
  __kind: 'Vesting';
  value: VestingCall;
}

export interface Call_Scheduler {
  __kind: 'Scheduler';
  value: SchedulerCall;
}

export interface Call_Proxy {
  __kind: 'Proxy';
  value: ProxyCall;
}

export interface Call_Multisig {
  __kind: 'Multisig';
  value: MultisigCall;
}

export interface Call_Preimage {
  __kind: 'Preimage';
  value: PreimageCall;
}

export interface Call_Bounties {
  __kind: 'Bounties';
  value: BountiesCall;
}

export interface Call_ChildBounties {
  __kind: 'ChildBounties';
  value: ChildBountiesCall;
}

export interface Call_Tips {
  __kind: 'Tips';
  value: TipsCall;
}

export interface Call_Nis {
  __kind: 'Nis';
  value: NisCall;
}

export interface Call_NisCounterpartBalances {
  __kind: 'NisCounterpartBalances';
  value: NisCounterpartBalancesCall;
}

export interface Call_Configuration {
  __kind: 'Configuration';
  value: ConfigurationCall;
}

export interface Call_ParasShared {
  __kind: 'ParasShared';
  value: ParasSharedCall;
}

export interface Call_ParaInclusion {
  __kind: 'ParaInclusion';
  value: ParaInclusionCall;
}

export interface Call_ParaInherent {
  __kind: 'ParaInherent';
  value: ParaInherentCall;
}

export interface Call_Paras {
  __kind: 'Paras';
  value: ParasCall;
}

export interface Call_Initializer {
  __kind: 'Initializer';
  value: InitializerCall;
}

export interface Call_Dmp {
  __kind: 'Dmp';
  value: DmpCall;
}

export interface Call_Ump {
  __kind: 'Ump';
  value: UmpCall;
}

export interface Call_Hrmp {
  __kind: 'Hrmp';
  value: HrmpCall;
}

export interface Call_ParasDisputes {
  __kind: 'ParasDisputes';
  value: ParasDisputesCall;
}

export interface Call_ParasSlashing {
  __kind: 'ParasSlashing';
  value: ParasSlashingCall;
}

export interface Call_Registrar {
  __kind: 'Registrar';
  value: RegistrarCall;
}

export interface Call_Slots {
  __kind: 'Slots';
  value: SlotsCall;
}

export interface Call_Auctions {
  __kind: 'Auctions';
  value: AuctionsCall;
}

export interface Call_Crowdloan {
  __kind: 'Crowdloan';
  value: CrowdloanCall;
}

export interface Call_XcmPallet {
  __kind: 'XcmPallet';
  value: XcmPalletCall;
}

export interface Call_Beefy {
  __kind: 'Beefy';
  value: BeefyCall;
}

export interface Call_ParasSudoWrapper {
  __kind: 'ParasSudoWrapper';
  value: ParasSudoWrapperCall;
}

export interface Call_AssignedSlots {
  __kind: 'AssignedSlots';
  value: AssignedSlotsCall;
}

export interface Call_ValidatorManager {
  __kind: 'ValidatorManager';
  value: ValidatorManagerCall;
}

export interface Call_StateTrieMigration {
  __kind: 'StateTrieMigration';
  value: StateTrieMigrationCall;
}

export interface Call_Sudo {
  __kind: 'Sudo';
  value: SudoCall;
}

export interface Weight {
  refTime: bigint;
  proofSize: bigint;
}

export type MultiAddress =
  | MultiAddress_Id
  | MultiAddress_Index
  | MultiAddress_Raw
  | MultiAddress_Address32
  | MultiAddress_Address20;

export interface MultiAddress_Id {
  __kind: 'Id';
  value: Uint8Array;
}

export interface MultiAddress_Index {
  __kind: 'Index';
  value: null;
}

export interface MultiAddress_Raw {
  __kind: 'Raw';
  value: Uint8Array;
}

export interface MultiAddress_Address32 {
  __kind: 'Address32';
  value: Uint8Array;
}

export interface MultiAddress_Address20 {
  __kind: 'Address20';
  value: Uint8Array;
}

export type ProxyType =
  | ProxyType_Any
  | ProxyType_NonTransfer
  | ProxyType_Governance
  | ProxyType_IdentityJudgement
  | ProxyType_CancelProxy
  | ProxyType_Auction
  | ProxyType_Society;

export interface ProxyType_Any {
  __kind: 'Any';
}

export interface ProxyType_NonTransfer {
  __kind: 'NonTransfer';
}

export interface ProxyType_Governance {
  __kind: 'Governance';
}

export interface ProxyType_IdentityJudgement {
  __kind: 'IdentityJudgement';
}

export interface ProxyType_CancelProxy {
  __kind: 'CancelProxy';
}

export interface ProxyType_Auction {
  __kind: 'Auction';
}

export interface ProxyType_Society {
  __kind: 'Society';
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall =
  | SystemCall_remark
  | SystemCall_set_heap_pages
  | SystemCall_set_code
  | SystemCall_set_code_without_checks
  | SystemCall_set_storage
  | SystemCall_kill_storage
  | SystemCall_kill_prefix
  | SystemCall_remark_with_event;

/**
 * Make some on-chain remark.
 *
 * ## Complexity
 * - `O(1)`
 */
export interface SystemCall_remark {
  __kind: 'remark';
  remark: Uint8Array;
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages';
  pages: bigint;
}

/**
 * Set the new runtime code.
 *
 * ## Complexity
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 */
export interface SystemCall_set_code {
  __kind: 'set_code';
  code: Uint8Array;
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 *
 * ## Complexity
 * - `O(C)` where `C` length of `code`
 */
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks';
  code: Uint8Array;
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage';
  items: [Uint8Array, Uint8Array][];
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage';
  keys: Uint8Array[];
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 *
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix';
  prefix: Uint8Array;
  subkeys: number;
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event';
  remark: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BabeCall =
  | BabeCall_report_equivocation
  | BabeCall_report_equivocation_unsigned
  | BabeCall_plan_config_change;

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 */
export interface BabeCall_report_equivocation {
  __kind: 'report_equivocation';
  equivocationProof: EquivocationProof;
  keyOwnerProof: MembershipProof;
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
  __kind: 'report_equivocation_unsigned';
  equivocationProof: EquivocationProof;
  keyOwnerProof: MembershipProof;
}

/**
 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
 * Multiple calls to this method will replace any existing planned config change that had
 * not been enacted yet.
 */
export interface BabeCall_plan_config_change {
  __kind: 'plan_config_change';
  config: NextConfigDescriptor;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set;

/**
 * Set the current time.
 *
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 *
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 *
 * The dispatch origin for this call must be `Inherent`.
 *
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
  __kind: 'set';
  now: bigint;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IndicesCall =
  | IndicesCall_claim
  | IndicesCall_transfer
  | IndicesCall_free
  | IndicesCall_force_transfer
  | IndicesCall_freeze;

/**
 * Assign an previously unassigned index.
 *
 * Payment: `Deposit` is reserved from the sender account.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `index`: the index to be claimed. This must not be in use.
 *
 * Emits `IndexAssigned` if successful.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_claim {
  __kind: 'claim';
  index: number;
}

/**
 * Assign an index already owned by the sender to another account. The balance reservation
 * is effectively transferred to the new account.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `index`: the index to be re-assigned. This must be owned by the sender.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *
 * Emits `IndexAssigned` if successful.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_transfer {
  __kind: 'transfer';
  new: MultiAddress;
  index: number;
}

/**
 * Free up an index owned by the sender.
 *
 * Payment: Any previous deposit placed for the index is unreserved in the sender account.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must own the index.
 *
 * - `index`: the index to be freed. This must be owned by the sender.
 *
 * Emits `IndexFreed` if successful.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_free {
  __kind: 'free';
  index: number;
}

/**
 * Force an index to an account. This doesn't require a deposit. If the index is already
 * held, then any deposit is reimbursed to its current owner.
 *
 * The dispatch origin for this call must be _Root_.
 *
 * - `index`: the index to be (re-)assigned.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 *
 * Emits `IndexAssigned` if successful.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_force_transfer {
  __kind: 'force_transfer';
  new: MultiAddress;
  index: number;
  freeze: boolean;
}

/**
 * Freeze an index so it will always point to the sender account. This consumes the
 * deposit.
 *
 * The dispatch origin for this call must be _Signed_ and the signing account must have a
 * non-frozen account `index`.
 *
 * - `index`: the index to be frozen in place.
 *
 * Emits `IndexFrozen` if successful.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface IndicesCall_freeze {
  __kind: 'freeze';
  index: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall =
  | BalancesCall_transfer
  | BalancesCall_set_balance
  | BalancesCall_force_transfer
  | BalancesCall_transfer_keep_alive
  | BalancesCall_transfer_all
  | BalancesCall_force_unreserve;

/**
 * Transfer some liquid free balance to another account.
 *
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 *
 * The dispatch origin for this call must be `Signed` by the transactor.
 *
 * ## Complexity
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 *
 * Related functions:
 *
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 */
export interface BalancesCall_transfer {
  __kind: 'transfer';
  dest: MultiAddress;
  value: bigint;
}

/**
 * Set the balances of a given account.
 *
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 *
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance';
  who: MultiAddress;
  newFree: bigint;
  newReserved: bigint;
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * ## Complexity
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer';
  source: MultiAddress;
  dest: MultiAddress;
  value: bigint;
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 *
 * 99% of the time you want [`transfer`] instead.
 *
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive';
  dest: MultiAddress;
  value: bigint;
}

/**
 * Transfer the entire transferable balance from the caller account.
 *
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 *
 * The dispatch origin of this call must be Signed.
 *
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). ## Complexity
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 */
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all';
  dest: MultiAddress;
  keepAlive: boolean;
}

/**
 * Unreserve some balance from a user by force.
 *
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
  __kind: 'force_unreserve';
  who: MultiAddress;
  amount: bigint;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys;

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 *
 * The dispatch origin of this function must be signed.
 *
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys';
  keys: SessionKeys;
  proof: Uint8Array;
}

/**
 * Removes any session key(s) of the function caller.
 *
 * This doesn't take effect until the next session.
 *
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 *
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys';
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall =
  | GrandpaCall_report_equivocation
  | GrandpaCall_report_equivocation_unsigned
  | GrandpaCall_note_stalled;

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
  __kind: 'report_equivocation';
  equivocationProof: Type_254;
  keyOwnerProof: MembershipProof;
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 *
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
  __kind: 'report_equivocation_unsigned';
  equivocationProof: Type_254;
  keyOwnerProof: MembershipProof;
}

/**
 * Note that the current authority set of the GRANDPA finality gadget has stalled.
 *
 * This will trigger a forced authority set change at the beginning of the next session, to
 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 * The block production rate (which may be slowed down because of finality lagging) should
 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 * authority will start voting on top of `best_finalized_block_number` for new finalized
 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
 * block of all validators of the new authority set.
 *
 * Only callable by root.
 */
export interface GrandpaCall_note_stalled {
  __kind: 'note_stalled';
  delay: number;
  bestFinalizedBlockNumber: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat;

/**
 * ## Complexity:
 * - `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is length of
 *   `heartbeat.network_state.external_address`
 *   - `O(K)`: decoding of length `K`
 *   - `O(E)`: decoding/encoding of length `E`
 */
export interface ImOnlineCall_heartbeat {
  __kind: 'heartbeat';
  heartbeat: Heartbeat;
  signature: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall =
  | DemocracyCall_propose
  | DemocracyCall_second
  | DemocracyCall_vote
  | DemocracyCall_emergency_cancel
  | DemocracyCall_external_propose
  | DemocracyCall_external_propose_majority
  | DemocracyCall_external_propose_default
  | DemocracyCall_fast_track
  | DemocracyCall_veto_external
  | DemocracyCall_cancel_referendum
  | DemocracyCall_delegate
  | DemocracyCall_undelegate
  | DemocracyCall_clear_public_proposals
  | DemocracyCall_unlock
  | DemocracyCall_remove_vote
  | DemocracyCall_remove_other_vote
  | DemocracyCall_blacklist
  | DemocracyCall_cancel_proposal
  | DemocracyCall_set_metadata;

/**
 * Propose a sensitive action to be taken.
 *
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 *
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 *
 * Emits `Proposed`.
 */
export interface DemocracyCall_propose {
  __kind: 'propose';
  proposal: Bounded;
  value: bigint;
}

/**
 * Signals agreement with a particular proposal.
 *
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 *
 * - `proposal`: The index of the proposal to second.
 */
export interface DemocracyCall_second {
  __kind: 'second';
  proposal: number;
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 */
export interface DemocracyCall_vote {
  __kind: 'vote';
  refIndex: number;
  vote: AccountVote;
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 *
 * The dispatch origin of this call must be `CancellationOrigin`.
 *
 * -`ref_index`: The index of the referendum to cancel.
 *
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel';
  refIndex: number;
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 *
 * The dispatch origin of this call must be `ExternalOrigin`.
 *
 * - `proposal_hash`: The preimage hash of the proposal.
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose';
  proposal: Bounded;
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 *
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 *
 * - `proposal_hash`: The preimage hash of the proposal.
 *
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 *
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority';
  proposal: Bounded;
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 *
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 *
 * - `proposal_hash`: The preimage hash of the proposal.
 *
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 *
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default';
  proposal: Bounded;
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 *
 * The dispatch of this call must be `FastTrackOrigin`.
 *
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 *
 * Emits `Started`.
 *
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track';
  proposalHash: Uint8Array;
  votingPeriod: number;
  delay: number;
}

/**
 * Veto and blacklist the external proposal hash.
 *
 * The dispatch origin of this call must be `VetoOrigin`.
 *
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 *
 * Emits `Vetoed`.
 *
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external';
  proposalHash: Uint8Array;
}

/**
 * Remove a referendum.
 *
 * The dispatch origin of this call must be _Root_.
 *
 * - `ref_index`: The index of the referendum to cancel.
 *
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum';
  refIndex: number;
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 *
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 *
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 *
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 *
 * Emits `Delegated`.
 *
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate';
  to: MultiAddress;
  conviction: Conviction;
  balance: bigint;
}

/**
 * Undelegate the voting power of the sending account.
 *
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 *
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 *
 * Emits `Undelegated`.
 *
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate';
}

/**
 * Clears all public proposals.
 *
 * The dispatch origin of this call must be _Root_.
 *
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals';
}

/**
 * Unlock tokens that have an expired lock.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `target`: The account to remove the lock on.
 *
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
  __kind: 'unlock';
  target: MultiAddress;
}

/**
 * Remove a vote for a referendum.
 *
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 *
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 *
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 *
 * - `index`: The index of referendum of the vote to be removed.
 *
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote';
  index: number;
}

/**
 * Remove a vote for a referendum.
 *
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 *
 * The dispatch origin of this call must be _Signed_.
 *
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 *
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote';
  target: MultiAddress;
  index: number;
}

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 *
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 *
 * The dispatch origin of this call must be `BlacklistOrigin`.
 *
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 *
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
  __kind: 'blacklist';
  proposalHash: Uint8Array;
  maybeRefIndex: number | undefined;
}

/**
 * Remove a proposal.
 *
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 *
 * - `prop_index`: The index of the proposal to cancel.
 *
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal';
  propIndex: number;
}

/**
 * Set or clear a metadata of a proposal or a referendum.
 *
 * Parameters:
 * - `origin`: Must correspond to the `MetadataOwner`.
 *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
 *       threshold.
 *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
 *       threshold.
 *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
 *       threshold.
 *     - `Signed` by a creator for a public proposal.
 *     - `Signed` to clear a metadata for a finished referendum.
 *     - `Root` to set a metadata for an ongoing referendum.
 * - `owner`: an identifier of a metadata owner.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface DemocracyCall_set_metadata {
  __kind: 'set_metadata';
  owner: MetadataOwner;
  maybeHash: Uint8Array | undefined;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall =
  | CouncilCall_set_members
  | CouncilCall_execute
  | CouncilCall_propose
  | CouncilCall_vote
  | CouncilCall_close_old_weight
  | CouncilCall_disapprove_proposal
  | CouncilCall_close;

/**
 * Set the collective's membership.
 *
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 *
 * The dispatch of this call must be `SetMembersOrigin`.
 *
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 *
 * # WARNING:
 *
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 *
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 */
export interface CouncilCall_set_members {
  __kind: 'set_members';
  newMembers: Uint8Array[];
  prime: Uint8Array | undefined;
  oldCount: number;
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 *
 * Origin must be a member of the collective.
 *
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
 */
export interface CouncilCall_execute {
  __kind: 'execute';
  proposal: Call;
  lengthBound: number;
}

/**
 * Add a new proposal to either be voted on or executed directly.
 *
 * Requires the sender to be member.
 *
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 *
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
export interface CouncilCall_propose {
  __kind: 'propose';
  threshold: number;
  proposal: Call;
  lengthBound: number;
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 *
 * Requires the sender to be a member.
 *
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface CouncilCall_vote {
  __kind: 'vote';
  proposal: Uint8Array;
  index: number;
  approve: boolean;
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 *
 * May be called by any signed account in order to finish voting and close the proposal.
 *
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 *
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 *
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 *
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 *
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close_old_weight {
  __kind: 'close_old_weight';
  proposalHash: Uint8Array;
  index: number;
  proposalWeightBound: bigint;
  lengthBound: number;
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 *
 * Must be called by the Root origin.
 *
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 *
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface CouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal';
  proposalHash: Uint8Array;
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 *
 * May be called by any signed account in order to finish voting and close the proposal.
 *
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 *
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 *
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 *
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 *
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface CouncilCall_close {
  __kind: 'close';
  proposalHash: Uint8Array;
  index: number;
  proposalWeightBound: Weight;
  lengthBound: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall =
  | TechnicalCommitteeCall_set_members
  | TechnicalCommitteeCall_execute
  | TechnicalCommitteeCall_propose
  | TechnicalCommitteeCall_vote
  | TechnicalCommitteeCall_close_old_weight
  | TechnicalCommitteeCall_disapprove_proposal
  | TechnicalCommitteeCall_close;

/**
 * Set the collective's membership.
 *
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 *
 * The dispatch of this call must be `SetMembersOrigin`.
 *
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 *
 * # WARNING:
 *
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 *
 * ## Complexity:
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members';
  newMembers: Uint8Array[];
  prime: Uint8Array | undefined;
  oldCount: number;
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 *
 * Origin must be a member of the collective.
 *
 * ## Complexity:
 * - `O(B + M + P)` where:
 * - `B` is `proposal` size in bytes (length-fee-bounded)
 * - `M` members-count (code-bounded)
 * - `P` complexity of dispatching `proposal`
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute';
  proposal: Call;
  lengthBound: number;
}

/**
 * Add a new proposal to either be voted on or executed directly.
 *
 * Requires the sender to be member.
 *
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 *
 * ## Complexity
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose';
  threshold: number;
  proposal: Call;
  lengthBound: number;
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 *
 * Requires the sender to be a member.
 *
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * ## Complexity
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote';
  proposal: Uint8Array;
  index: number;
  approve: boolean;
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 *
 * May be called by any signed account in order to finish voting and close the proposal.
 *
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 *
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 *
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 *
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 *
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close_old_weight {
  __kind: 'close_old_weight';
  proposalHash: Uint8Array;
  index: number;
  proposalWeightBound: bigint;
  lengthBound: number;
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 *
 * Must be called by the Root origin.
 *
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 *
 * ## Complexity
 * O(P) where P is the number of max proposals
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal';
  proposalHash: Uint8Array;
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 *
 * May be called by any signed account in order to finish voting and close the proposal.
 *
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 *
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 *
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 *
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 *
 * ## Complexity
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 */
export interface TechnicalCommitteeCall_close {
  __kind: 'close';
  proposalHash: Uint8Array;
  index: number;
  proposalWeightBound: Weight;
  lengthBound: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PhragmenElectionCall =
  | PhragmenElectionCall_vote
  | PhragmenElectionCall_remove_voter
  | PhragmenElectionCall_submit_candidacy
  | PhragmenElectionCall_renounce_candidacy
  | PhragmenElectionCall_remove_member
  | PhragmenElectionCall_clean_defunct_voters;

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 *
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 *
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 *
 * If `value` is more than `who`'s free balance, then the maximum of the two is used.
 *
 * The dispatch origin of this call must be signed.
 *
 * ### Warning
 *
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 */
export interface PhragmenElectionCall_vote {
  __kind: 'vote';
  votes: Uint8Array[];
  value: bigint;
}

/**
 * Remove `origin` as a voter.
 *
 * This removes the lock and returns the deposit.
 *
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface PhragmenElectionCall_remove_voter {
  __kind: 'remove_voter';
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 *
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 *
 * The dispatch origin of this call must be signed.
 *
 * ### Warning
 *
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 *
 * The number of current candidates must be provided as witness data.
 * ## Complexity
 * O(C + log(C)) where C is candidate_count.
 */
export interface PhragmenElectionCall_submit_candidacy {
  __kind: 'submit_candidacy';
  candidateCount: number;
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 *
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 *
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * The type of renouncing must be provided as witness data.
 *
 * ## Complexity
 *   - Renouncing::Candidate(count): O(count + log(count))
 *   - Renouncing::Member: O(1)
 *   - Renouncing::RunnerUp: O(1)
 */
export interface PhragmenElectionCall_renounce_candidacy {
  __kind: 'renounce_candidacy';
  renouncing: Renouncing;
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 *
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
 * started, else, nothing happens.
 *
 * If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
 * it is returned.
 *
 * The dispatch origin of this call must be root.
 *
 * Note that this does not affect the designated block number of the next election.
 *
 * ## Complexity
 * - Check details of remove_and_replace_member() and do_phragmen().
 */
export interface PhragmenElectionCall_remove_member {
  __kind: 'remove_member';
  who: MultiAddress;
  slashBond: boolean;
  rerunElection: boolean;
}

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 *
 * This is an root function to be used only for cleaning the state.
 *
 * The dispatch origin of this call must be root.
 *
 * ## Complexity
 * - Check is_defunct_voter() details.
 */
export interface PhragmenElectionCall_clean_defunct_voters {
  __kind: 'clean_defunct_voters';
  numVoters: number;
  numDefunct: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall =
  | TechnicalMembershipCall_add_member
  | TechnicalMembershipCall_remove_member
  | TechnicalMembershipCall_swap_member
  | TechnicalMembershipCall_reset_members
  | TechnicalMembershipCall_change_key
  | TechnicalMembershipCall_set_prime
  | TechnicalMembershipCall_clear_prime;

/**
 * Add a member `who` to the set.
 *
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
  __kind: 'add_member';
  who: MultiAddress;
}

/**
 * Remove a member `who` from the set.
 *
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
  __kind: 'remove_member';
  who: MultiAddress;
}

/**
 * Swap out one member `remove` for another `add`.
 *
 * May only be called from `T::SwapOrigin`.
 *
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
  __kind: 'swap_member';
  remove: MultiAddress;
  add: MultiAddress;
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 *
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
  __kind: 'reset_members';
  members: Uint8Array[];
}

/**
 * Swap out the sending member for some other key `new`.
 *
 * May only be called from `Signed` origin of a current member.
 *
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
  __kind: 'change_key';
  new: MultiAddress;
}

/**
 * Set the prime member. Must be a current member.
 *
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
  __kind: 'set_prime';
  who: MultiAddress;
}

/**
 * Remove the prime member if it exists.
 *
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
  __kind: 'clear_prime';
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall =
  | TreasuryCall_propose_spend
  | TreasuryCall_reject_proposal
  | TreasuryCall_approve_proposal
  | TreasuryCall_spend
  | TreasuryCall_remove_approval;

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 *
 * ## Complexity
 * - O(1)
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend';
  value: bigint;
  beneficiary: MultiAddress;
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 *
 * May only be called from `T::RejectOrigin`.
 *
 * ## Complexity
 * - O(1)
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal';
  proposalId: number;
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 *
 * May only be called from `T::ApproveOrigin`.
 *
 * ## Complexity
 *  - O(1).
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal';
  proposalId: number;
}

/**
 * Propose and approve a spend of treasury funds.
 *
 * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 *
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 */
export interface TreasuryCall_spend {
  __kind: 'spend';
  amount: bigint;
  beneficiary: MultiAddress;
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * The original deposit will no longer be returned.
 *
 * May only be called from `T::RejectOrigin`.
 * - `proposal_id`: The index of a proposal
 *
 * ## Complexity
 * - O(A) where `A` is the number of approvals
 *
 * Errors:
 * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
 * i.e., the proposal has not been approved. This could also mean the proposal does not
 * exist altogether, thus there is no way it would have been approved in the first place.
 */
export interface TreasuryCall_remove_approval {
  __kind: 'remove_approval';
  proposalId: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ClaimsCall =
  | ClaimsCall_claim
  | ClaimsCall_mint_claim
  | ClaimsCall_claim_attest
  | ClaimsCall_attest
  | ClaimsCall_move_claim;

/**
 * Make a claim to collect your DOTs.
 *
 * The dispatch origin for this call must be _None_.
 *
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 *
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 *
 * and `address` matches the `dest` account.
 *
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message
 *    matching the format described above.
 *
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim` call.
 *
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim {
  __kind: 'claim';
  dest: Uint8Array;
  ethereumSignature: Uint8Array;
}

/**
 * Mint a new claim to collect DOTs.
 *
 * The dispatch origin for this call must be _Root_.
 *
 * Parameters:
 * - `who`: The Ethereum address allowed to collect this claim.
 * - `value`: The number of DOTs that will be claimed.
 * - `vesting_schedule`: An optional vesting schedule for these DOTs.
 *
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * We assume worst case that both vesting and statement is being inserted.
 *
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_mint_claim {
  __kind: 'mint_claim';
  who: Uint8Array;
  value: bigint;
  vestingSchedule: [bigint, bigint, number] | undefined;
  statement: StatementKind | undefined;
}

/**
 * Make a claim to collect your DOTs by signing a statement.
 *
 * The dispatch origin for this call must be _None_.
 *
 * Unsigned Validation:
 * A call to `claim_attest` is deemed valid if the signature provided matches
 * the expected signed message of:
 *
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)(statement)
 *
 * and `address` matches the `dest` account; the `statement` must match that which is
 * expected according to your purchase arrangement.
 *
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message
 *    matching the format described above.
 * - `statement`: The identity of the statement which is being attested to in the signature.
 *
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim_attest` call.
 *
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim_attest {
  __kind: 'claim_attest';
  dest: Uint8Array;
  ethereumSignature: Uint8Array;
  statement: Uint8Array;
}

/**
 * Attest to a statement, needed to finalize the claims process.
 *
 * WARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.
 *
 * Unsigned Validation:
 * A call to attest is deemed valid if the sender has a `Preclaim` registered
 * and provides a `statement` which is expected for the account.
 *
 * Parameters:
 * - `statement`: The identity of the statement which is being attested to in the signature.
 *
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to do pre-validation on `attest` call.
 *
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_attest {
  __kind: 'attest';
  statement: Uint8Array;
}

export interface ClaimsCall_move_claim {
  __kind: 'move_claim';
  old: Uint8Array;
  new: Uint8Array;
  maybePreclaim: Uint8Array | undefined;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall =
  | UtilityCall_batch
  | UtilityCall_as_derivative
  | UtilityCall_batch_all
  | UtilityCall_dispatch_as
  | UtilityCall_force_batch
  | UtilityCall_with_weight;

/**
 * Send a batch of dispatch calls.
 *
 * May be called from any origin except `None`.
 *
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 *
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch';
  calls: Call[];
}

/**
 * Send a call through an indexed pseudonym of the sender.
 *
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 *
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 *
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 *
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
  __kind: 'as_derivative';
  index: number;
  call: Call;
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 *
 * May be called from any origin except `None`.
 *
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_batch_all {
  __kind: 'batch_all';
  calls: Call[];
}

/**
 * Dispatches a function call with a provided origin.
 *
 * The dispatch origin for this call must be _Root_.
 *
 * ## Complexity
 * - O(1).
 */
export interface UtilityCall_dispatch_as {
  __kind: 'dispatch_as';
  asOrigin: OriginCaller;
  call: Call;
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 *
 * May be called from any origin except `None`.
 *
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_force_batch {
  __kind: 'force_batch';
  calls: Call[];
}

/**
 * Dispatch a function call with a specified weight.
 *
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 *
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
  __kind: 'with_weight';
  call: Call;
  weight: Weight;
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall =
  | IdentityCall_add_registrar
  | IdentityCall_set_identity
  | IdentityCall_set_subs
  | IdentityCall_clear_identity
  | IdentityCall_request_judgement
  | IdentityCall_cancel_request
  | IdentityCall_set_fee
  | IdentityCall_set_account_id
  | IdentityCall_set_fields
  | IdentityCall_provide_judgement
  | IdentityCall_kill_identity
  | IdentityCall_add_sub
  | IdentityCall_rename_sub
  | IdentityCall_remove_sub
  | IdentityCall_quit_sub;

/**
 * Add a registrar to the system.
 *
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 *
 * - `account`: the account of the registrar.
 *
 * Emits `RegistrarAdded` if successful.
 *
 * ## Complexity
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 */
export interface IdentityCall_add_registrar {
  __kind: 'add_registrar';
  account: MultiAddress;
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 *
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `info`: The identity information.
 *
 * Emits `IdentitySet` if successful.
 *
 * ## Complexity
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 */
export interface IdentityCall_set_identity {
  __kind: 'set_identity';
  info: IdentityInfo;
}

/**
 * Set the sub-accounts of the sender.
 *
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 *
 * - `subs`: The identity's (new) sub-accounts.
 *
 * ## Complexity
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 */
export interface IdentityCall_set_subs {
  __kind: 'set_subs';
  subs: [Uint8Array, Data][];
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 *
 * Payment: All reserved balances on the account are returned.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 *
 * Emits `IdentityCleared` if successful.
 *
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_clear_identity {
  __kind: 'clear_identity';
}

/**
 * Request a judgement from a registrar.
 *
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 *
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 *
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 *
 * Emits `JudgementRequested` if successful.
 *
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_request_judgement {
  __kind: 'request_judgement';
  regIndex: number;
  maxFee: bigint;
}

/**
 * Cancel a previous request.
 *
 * Payment: A previously reserved deposit is returned on success.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 *
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 *
 * Emits `JudgementUnrequested` if successful.
 *
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_cancel_request {
  __kind: 'cancel_request';
  regIndex: number;
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 *
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 *
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
 */
export interface IdentityCall_set_fee {
  __kind: 'set_fee';
  index: number;
  fee: bigint;
}

/**
 * Change the account associated with a registrar.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 *
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 *
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
 */
export interface IdentityCall_set_account_id {
  __kind: 'set_account_id';
  index: number;
  new: MultiAddress;
}

/**
 * Set the field information for a registrar.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 *
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 *
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
 */
export interface IdentityCall_set_fields {
  __kind: 'set_fields';
  index: number;
  fields: bigint;
}

/**
 * Provide a judgement for an account's identity.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 *
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
 *
 * Emits `JudgementGiven` if successful.
 *
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_provide_judgement {
  __kind: 'provide_judgement';
  regIndex: number;
  target: MultiAddress;
  judgement: Judgement;
  identity: Uint8Array;
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 *
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 *
 * The dispatch origin for this call must match `T::ForceOrigin`.
 *
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 *
 * Emits `IdentityKilled` if successful.
 *
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_kill_identity {
  __kind: 'kill_identity';
  target: MultiAddress;
}

/**
 * Add the given account to the sender's subs.
 *
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
  __kind: 'add_sub';
  sub: MultiAddress;
  data: Data;
}

/**
 * Alter the associated name of the given sub-account.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
  __kind: 'rename_sub';
  sub: MultiAddress;
  data: Data;
}

/**
 * Remove the given account from the sender's subs.
 *
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
  __kind: 'remove_sub';
  sub: MultiAddress;
}

/**
 * Remove the sender as a sub-account.
 *
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 *
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
  __kind: 'quit_sub';
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SocietyCall =
  | SocietyCall_bid
  | SocietyCall_unbid
  | SocietyCall_vouch
  | SocietyCall_unvouch
  | SocietyCall_vote
  | SocietyCall_defender_vote
  | SocietyCall_payout
  | SocietyCall_found
  | SocietyCall_unfound
  | SocietyCall_judge_suspended_member
  | SocietyCall_judge_suspended_candidate
  | SocietyCall_set_max_members;

/**
 * A user outside of the society can make a bid for entry.
 *
 * Payment: `CandidateDeposit` will be reserved for making a bid. It is returned
 * when the bid becomes a member, or if the bid calls `unbid`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `value`: A one time payment the bid would like to receive when joining the society.
 *
 * ## Complexity
 * - O(M + B + C + logM + logB + X)
 * 	  - B (len of bids)
 *   - C (len of candidates)
 *   - M (len of members)
 *   - X (balance reserve)
 */
export interface SocietyCall_bid {
  __kind: 'bid';
  value: bigint;
}

/**
 * A bidder can remove their bid for entry into society.
 * By doing so, they will have their candidate deposit returned or
 * they will unvouch their voucher.
 *
 * Payment: The bid deposit is unreserved if the user made a bid.
 *
 * The dispatch origin for this call must be _Signed_ and a bidder.
 *
 * Parameters:
 * - `pos`: Position in the `Bids` vector of the bid who wants to unbid.
 *
 * ## Complexity
 * - O(B + X)
 *   - B (len of bids)
 *   - X (balance unreserve)
 */
export interface SocietyCall_unbid {
  __kind: 'unbid';
  pos: number;
}

/**
 * As a member, vouch for someone to join society by placing a bid on their behalf.
 *
 * There is no deposit required to vouch for a new bid, but a member can only vouch for
 * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
 * the suspension judgement origin, the member will be banned from vouching again.
 *
 * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
 * be paid as a portion of the reward the member will receive for joining the society.
 *
 * The dispatch origin for this call must be _Signed_ and a member.
 *
 * Parameters:
 * - `who`: The user who you would like to vouch for.
 * - `value`: The total reward to be paid between you and the candidate if they become
 * a member in the society.
 * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
 * the society. Tips larger than `value` will be saturated upon payout.
 *
 * ## Complexity
 * - O(M + B + C + logM + logB + X)
 *   - B (len of bids)
 *   - C (len of candidates)
 *   - M (len of members)
 *   - X (balance reserve)
 */
export interface SocietyCall_vouch {
  __kind: 'vouch';
  who: MultiAddress;
  value: bigint;
  tip: bigint;
}

/**
 * As a vouching member, unvouch a bid. This only works while vouched user is
 * only a bidder (and not a candidate).
 *
 * The dispatch origin for this call must be _Signed_ and a vouching member.
 *
 * Parameters:
 * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
 *
 * ## Complexity
 * - O(B)
 *   - B (len of bids)
 */
export interface SocietyCall_unvouch {
  __kind: 'unvouch';
  pos: number;
}

/**
 * As a member, vote on a candidate.
 *
 * The dispatch origin for this call must be _Signed_ and a member.
 *
 * Parameters:
 * - `candidate`: The candidate that the member would like to bid on.
 * - `approve`: A boolean which says if the candidate should be approved (`true`) or
 *   rejected (`false`).
 *
 * ## Complexity
 * - O(M + logM + C)
 *   - C (len of candidates)
 *   - M (len of members)
 */
export interface SocietyCall_vote {
  __kind: 'vote';
  candidate: MultiAddress;
  approve: boolean;
}

/**
 * As a member, vote on the defender.
 *
 * The dispatch origin for this call must be _Signed_ and a member.
 *
 * Parameters:
 * - `approve`: A boolean which says if the candidate should be
 * approved (`true`) or rejected (`false`).
 *
 * ## Complexity
 * - O(M + logM)
 *   - M (len of members)
 */
export interface SocietyCall_defender_vote {
  __kind: 'defender_vote';
  approve: boolean;
}

/**
 * Transfer the first matured payout for the sender and remove it from the records.
 *
 * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
 * payouts.
 *
 * Payment: The member will receive a payment equal to their first matured
 * payout to their free balance.
 *
 * The dispatch origin for this call must be _Signed_ and a member with
 * payouts remaining.
 *
 * ## Complexity
 * - O(M + logM + P + X)
 *   - M (len of members)
 *   - P (number of payouts for a particular member)
 *   - X (currency transfer call)
 */
export interface SocietyCall_payout {
  __kind: 'payout';
}

/**
 * Found the society.
 *
 * This is done as a discrete action in order to allow for the
 * pallet to be included into a running chain and can only be done once.
 *
 * The dispatch origin for this call must be from the _FounderSetOrigin_.
 *
 * Parameters:
 * - `founder` - The first member and head of the newly founded society.
 * - `max_members` - The initial max number of members for the society.
 * - `rules` - The rules of this society concerning membership.
 *
 * ## Complexity
 * - O(1)
 */
export interface SocietyCall_found {
  __kind: 'found';
  founder: MultiAddress;
  maxMembers: number;
  rules: Uint8Array;
}

/**
 * Annul the founding of the society.
 *
 * The dispatch origin for this call must be Signed, and the signing account must be both
 * the `Founder` and the `Head`. This implies that it may only be done when there is one
 * member.
 *
 * ## Complexity
 * - O(1)
 */
export interface SocietyCall_unfound {
  __kind: 'unfound';
}

/**
 * Allow suspension judgement origin to make judgement on a suspended member.
 *
 * If a suspended member is forgiven, we simply add them back as a member, not affecting
 * any of the existing storage items for that member.
 *
 * If a suspended member is rejected, remove all associated storage items, including
 * their payouts, and remove any vouched bids they currently have.
 *
 * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 *
 * Parameters:
 * - `who` - The suspended member to be judged.
 * - `forgive` - A boolean representing whether the suspension judgement origin forgives
 *   (`true`) or rejects (`false`) a suspended member.
 *
 * ## Complexity
 * - O(M + logM + B)
 *   - B (len of bids)
 *   - M (len of members)
 */
export interface SocietyCall_judge_suspended_member {
  __kind: 'judge_suspended_member';
  who: MultiAddress;
  forgive: boolean;
}

/**
 * Allow suspended judgement origin to make judgement on a suspended candidate.
 *
 * If the judgement is `Approve`, we add them to society as a member with the appropriate
 * payment for joining society.
 *
 * If the judgement is `Reject`, we either slash the deposit of the bid, giving it back
 * to the society treasury, or we ban the voucher from vouching again.
 *
 * If the judgement is `Rebid`, we put the candidate back in the bid pool and let them go
 * through the induction process again.
 *
 * The dispatch origin for this call must be from the _SuspensionJudgementOrigin_.
 *
 * Parameters:
 * - `who` - The suspended candidate to be judged.
 * - `judgement` - `Approve`, `Reject`, or `Rebid`.
 *
 * ## Complexity
 * - O(M + logM + B + X)
 *   - B (len of bids)
 *   - M (len of members)
 *   - X (balance action)
 */
export interface SocietyCall_judge_suspended_candidate {
  __kind: 'judge_suspended_candidate';
  who: MultiAddress;
  judgement: Type_353;
}

/**
 * Allows root origin to change the maximum number of members in society.
 * Max membership count must be greater than 1.
 *
 * The dispatch origin for this call must be from _ROOT_.
 *
 * Parameters:
 * - `max` - The maximum number of members for the society.
 *
 * ## Complexity
 * - O(1)
 */
export interface SocietyCall_set_max_members {
  __kind: 'set_max_members';
  max: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RecoveryCall =
  | RecoveryCall_as_recovered
  | RecoveryCall_set_recovered
  | RecoveryCall_create_recovery
  | RecoveryCall_initiate_recovery
  | RecoveryCall_vouch_recovery
  | RecoveryCall_claim_recovery
  | RecoveryCall_close_recovery
  | RecoveryCall_remove_recovery
  | RecoveryCall_cancel_recovered;

/**
 * Send a call through a recovered account.
 *
 * The dispatch origin for this call must be _Signed_ and registered to
 * be able to make calls on behalf of the recovered account.
 *
 * Parameters:
 * - `account`: The recovered account you want to make a call on-behalf-of.
 * - `call`: The call you want to make with the recovered account.
 */
export interface RecoveryCall_as_recovered {
  __kind: 'as_recovered';
  account: MultiAddress;
  call: Call;
}

/**
 * Allow ROOT to bypass the recovery process and set an a rescuer account
 * for a lost account directly.
 *
 * The dispatch origin for this call must be _ROOT_.
 *
 * Parameters:
 * - `lost`: The "lost account" to be recovered.
 * - `rescuer`: The "rescuer account" which can call as the lost account.
 */
export interface RecoveryCall_set_recovered {
  __kind: 'set_recovered';
  lost: MultiAddress;
  rescuer: MultiAddress;
}

/**
 * Create a recovery configuration for your account. This makes your account recoverable.
 *
 * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
 * will be reserved for storing the recovery configuration. This deposit is returned
 * in full when the user calls `remove_recovery`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
 *   ordered and contain no duplicate values.
 * - `threshold`: The number of friends that must vouch for a recovery attempt before the
 *   account can be recovered. Should be less than or equal to the length of the list of
 *   friends.
 * - `delay_period`: The number of blocks after a recovery attempt is initialized that
 *   needs to pass before the account can be recovered.
 */
export interface RecoveryCall_create_recovery {
  __kind: 'create_recovery';
  friends: Uint8Array[];
  threshold: number;
  delayPeriod: number;
}

/**
 * Initiate the process for recovering a recoverable account.
 *
 * Payment: `RecoveryDeposit` balance will be reserved for initiating the
 * recovery process. This deposit will always be repatriated to the account
 * trying to be recovered. See `close_recovery`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `account`: The lost account that you want to recover. This account needs to be
 *   recoverable (i.e. have a recovery configuration).
 */
export interface RecoveryCall_initiate_recovery {
  __kind: 'initiate_recovery';
  account: MultiAddress;
}

/**
 * Allow a "friend" of a recoverable account to vouch for an active recovery
 * process for that account.
 *
 * The dispatch origin for this call must be _Signed_ and must be a "friend"
 * for the recoverable account.
 *
 * Parameters:
 * - `lost`: The lost account that you want to recover.
 * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
 *
 * The combination of these two parameters must point to an active recovery
 * process.
 */
export interface RecoveryCall_vouch_recovery {
  __kind: 'vouch_recovery';
  lost: MultiAddress;
  rescuer: MultiAddress;
}

/**
 * Allow a successful rescuer to claim their recovered account.
 *
 * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
 * who has successfully completed the account recovery process: collected
 * `threshold` or more vouches, waited `delay_period` blocks since initiation.
 *
 * Parameters:
 * - `account`: The lost account that you want to claim has been successfully recovered by
 *   you.
 */
export interface RecoveryCall_claim_recovery {
  __kind: 'claim_recovery';
  account: MultiAddress;
}

/**
 * As the controller of a recoverable account, close an active recovery
 * process for your account.
 *
 * Payment: By calling this function, the recoverable account will receive
 * the recovery deposit `RecoveryDeposit` placed by the rescuer.
 *
 * The dispatch origin for this call must be _Signed_ and must be a
 * recoverable account with an active recovery process for it.
 *
 * Parameters:
 * - `rescuer`: The account trying to rescue this recoverable account.
 */
export interface RecoveryCall_close_recovery {
  __kind: 'close_recovery';
  rescuer: MultiAddress;
}

/**
 * Remove the recovery process for your account. Recovered accounts are still accessible.
 *
 * NOTE: The user must make sure to call `close_recovery` on all active
 * recovery attempts before calling this function else it will fail.
 *
 * Payment: By calling this function the recoverable account will unreserve
 * their recovery configuration deposit.
 * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
 *
 * The dispatch origin for this call must be _Signed_ and must be a
 * recoverable account (i.e. has a recovery configuration).
 */
export interface RecoveryCall_remove_recovery {
  __kind: 'remove_recovery';
}

/**
 * Cancel the ability to use `as_recovered` for `account`.
 *
 * The dispatch origin for this call must be _Signed_ and registered to
 * be able to make calls on behalf of the recovered account.
 *
 * Parameters:
 * - `account`: The recovered account you are able to call on-behalf-of.
 */
export interface RecoveryCall_cancel_recovered {
  __kind: 'cancel_recovered';
  account: MultiAddress;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall =
  | VestingCall_vest
  | VestingCall_vest_other
  | VestingCall_vested_transfer
  | VestingCall_force_vested_transfer
  | VestingCall_merge_schedules;

/**
 * Unlock any vested funds of the sender account.
 *
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 *
 * Emits either `VestingCompleted` or `VestingUpdated`.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface VestingCall_vest {
  __kind: 'vest';
}

/**
 * Unlock any vested funds of a `target` account.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 *
 * Emits either `VestingCompleted` or `VestingUpdated`.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface VestingCall_vest_other {
  __kind: 'vest_other';
  target: MultiAddress;
}

/**
 * Create a vested transfer.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `target`: The account receiving the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 *
 * Emits `VestingCreated`.
 *
 * NOTE: This will unlock all schedules through the current block.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer';
  target: MultiAddress;
  schedule: VestingInfo;
}

/**
 * Force a vested transfer.
 *
 * The dispatch origin for this call must be _Root_.
 *
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `schedule`: The vesting schedule attached to the transfer.
 *
 * Emits `VestingCreated`.
 *
 * NOTE: This will unlock all schedules through the current block.
 *
 * ## Complexity
 * - `O(1)`.
 */
export interface VestingCall_force_vested_transfer {
  __kind: 'force_vested_transfer';
  source: MultiAddress;
  target: MultiAddress;
  schedule: VestingInfo;
}

/**
 * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
 * the highest possible start and end blocks. If both schedules have already started the
 * current block will be used as the schedule start; with the caveat that if one schedule
 * is finished by the current block, the other will be treated as the new merged schedule,
 * unmodified.
 *
 * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
 * NOTE: This will unlock all schedules through the current block prior to merging.
 * NOTE: If both schedules have ended by the current block, no new schedule will be created
 * and both will be removed.
 *
 * Merged schedule attributes:
 * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
 *   current_block)`.
 * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
 * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `schedule1_index`: index of the first schedule to merge.
 * - `schedule2_index`: index of the second schedule to merge.
 */
export interface VestingCall_merge_schedules {
  __kind: 'merge_schedules';
  schedule1Index: number;
  schedule2Index: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall =
  | SchedulerCall_schedule
  | SchedulerCall_cancel
  | SchedulerCall_schedule_named
  | SchedulerCall_cancel_named
  | SchedulerCall_schedule_after
  | SchedulerCall_schedule_named_after;

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule';
  when: number;
  maybePeriodic: [number, number] | undefined;
  priority: number;
  call: Call;
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel';
  when: number;
  index: number;
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named';
  id: Uint8Array;
  when: number;
  maybePeriodic: [number, number] | undefined;
  priority: number;
  call: Call;
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named';
  id: Uint8Array;
}

/**
 * Anonymously schedule a task after a delay.
 */
export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after';
  after: number;
  maybePeriodic: [number, number] | undefined;
  priority: number;
  call: Call;
}

/**
 * Schedule a named task after a delay.
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after';
  id: Uint8Array;
  after: number;
  maybePeriodic: [number, number] | undefined;
  priority: number;
  call: Call;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall =
  | ProxyCall_proxy
  | ProxyCall_add_proxy
  | ProxyCall_remove_proxy
  | ProxyCall_remove_proxies
  | ProxyCall_create_pure
  | ProxyCall_kill_pure
  | ProxyCall_announce
  | ProxyCall_remove_announcement
  | ProxyCall_reject_announcement
  | ProxyCall_proxy_announced;

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy {
  __kind: 'proxy';
  real: MultiAddress;
  forceProxyType: ProxyType | undefined;
  call: Call;
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 */
export interface ProxyCall_add_proxy {
  __kind: 'add_proxy';
  delegate: MultiAddress;
  proxyType: ProxyType;
  delay: number;
}

/**
 * Unregister a proxy account for the sender.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 */
export interface ProxyCall_remove_proxy {
  __kind: 'remove_proxy';
  delegate: MultiAddress;
  proxyType: ProxyType;
  delay: number;
}

/**
 * Unregister all proxy accounts for the sender.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * WARNING: This may be called on accounts created by `pure`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 */
export interface ProxyCall_remove_proxies {
  __kind: 'remove_proxies';
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 *
 * Requires a `Signed` origin.
 *
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 *
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 *
 * Fails if there are insufficient funds to pay for deposit.
 */
export interface ProxyCall_create_pure {
  __kind: 'create_pure';
  proxyType: ProxyType;
  delay: number;
  index: number;
}

/**
 * Removes a previously spawned pure proxy.
 *
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 *
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `pure` with corresponding parameters.
 *
 * - `spawner`: The account that originally called `pure` to create this account.
 * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `pure`.
 * - `height`: The height of the chain when the call to `pure` was processed.
 * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
 *
 * Fails with `NoPermission` in case the caller is not a previously created pure
 * account whose `pure` call has corresponding parameters.
 */
export interface ProxyCall_kill_pure {
  __kind: 'kill_pure';
  spawner: MultiAddress;
  proxyType: ProxyType;
  index: number;
  height: number;
  extIndex: number;
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 *
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 *
 * No more than `MaxPending` announcements may be made at any one time.
 *
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 *
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 *
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_announce {
  __kind: 'announce';
  real: MultiAddress;
  callHash: Uint8Array;
}

/**
 * Remove a given announcement.
 *
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 */
export interface ProxyCall_remove_announcement {
  __kind: 'remove_announcement';
  real: MultiAddress;
  callHash: Uint8Array;
}

/**
 * Remove the given announcement of a delegate.
 *
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 */
export interface ProxyCall_reject_announcement {
  __kind: 'reject_announcement';
  delegate: MultiAddress;
  callHash: Uint8Array;
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 *
 * Removes any corresponding announcement(s).
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 */
export interface ProxyCall_proxy_announced {
  __kind: 'proxy_announced';
  delegate: MultiAddress;
  real: MultiAddress;
  forceProxyType: ProxyType | undefined;
  call: Call;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall =
  | MultisigCall_as_multi_threshold_1
  | MultisigCall_as_multi
  | MultisigCall_approve_as_multi
  | MultisigCall_cancel_as_multi;

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 *
 * Result is equivalent to the dispatched result.
 *
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
 */
export interface MultisigCall_as_multi_threshold_1 {
  __kind: 'as_multi_threshold_1';
  otherSignatories: Uint8Array[];
  call: Call;
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 *
 * If there are enough, then dispatch the call.
 *
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 *
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 *
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 *
 * ## Complexity
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
export interface MultisigCall_as_multi {
  __kind: 'as_multi';
  threshold: number;
  otherSignatories: Uint8Array[];
  maybeTimepoint: Timepoint | undefined;
  call: Call;
  maxWeight: Weight;
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 *
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 *
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 *
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
export interface MultisigCall_approve_as_multi {
  __kind: 'approve_as_multi';
  threshold: number;
  otherSignatories: Uint8Array[];
  maybeTimepoint: Timepoint | undefined;
  callHash: Uint8Array;
  maxWeight: Weight;
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 *
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 */
export interface MultisigCall_cancel_as_multi {
  __kind: 'cancel_as_multi';
  threshold: number;
  otherSignatories: Uint8Array[];
  timepoint: Timepoint;
  callHash: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall =
  | PreimageCall_note_preimage
  | PreimageCall_unnote_preimage
  | PreimageCall_request_preimage
  | PreimageCall_unrequest_preimage;

/**
 * Register a preimage on-chain.
 *
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
  __kind: 'note_preimage';
  bytes: Uint8Array;
}

/**
 * Clear an unrequested preimage from the runtime storage.
 *
 * If `len` is provided, then it will be a much cheaper operation.
 *
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
 */
export interface PreimageCall_unnote_preimage {
  __kind: 'unnote_preimage';
  hash: Uint8Array;
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 *
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
  __kind: 'request_preimage';
  hash: Uint8Array;
}

/**
 * Clear a previously made request for a preimage.
 *
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
  __kind: 'unrequest_preimage';
  hash: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall =
  | BountiesCall_propose_bounty
  | BountiesCall_approve_bounty
  | BountiesCall_propose_curator
  | BountiesCall_unassign_curator
  | BountiesCall_accept_curator
  | BountiesCall_award_bounty
  | BountiesCall_claim_bounty
  | BountiesCall_close_bounty
  | BountiesCall_extend_bounty_expiry;

/**
 * Propose a new bounty.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 *
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
  __kind: 'propose_bounty';
  value: bigint;
  description: Uint8Array;
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 *
 * May only be called from `T::SpendOrigin`.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_approve_bounty {
  __kind: 'approve_bounty';
  bountyId: number;
}

/**
 * Assign a curator to a funded bounty.
 *
 * May only be called from `T::SpendOrigin`.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_propose_curator {
  __kind: 'propose_curator';
  bountyId: number;
  curator: MultiAddress;
  fee: bigint;
}

/**
 * Unassign curator from a bounty.
 *
 * This function can only be called by the `RejectOrigin` a signed origin.
 *
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 *
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 *
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_unassign_curator {
  __kind: 'unassign_curator';
  bountyId: number;
}

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 *
 * May only be called from the curator.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_accept_curator {
  __kind: 'accept_curator';
  bountyId: number;
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 *
 * The dispatch origin for this call must be the curator of this bounty.
 *
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_award_bounty {
  __kind: 'award_bounty';
  bountyId: number;
  beneficiary: MultiAddress;
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 *
 * The dispatch origin for this call must be the beneficiary of this bounty.
 *
 * - `bounty_id`: Bounty ID to claim.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_claim_bounty {
  __kind: 'claim_bounty';
  bountyId: number;
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 *
 * Only `T::RejectOrigin` is able to cancel a bounty.
 *
 * - `bounty_id`: Bounty ID to cancel.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_close_bounty {
  __kind: 'close_bounty';
  bountyId: number;
}

/**
 * Extend the expiry time of an active bounty.
 *
 * The dispatch origin for this call must be the curator of this bounty.
 *
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 *
 * ## Complexity
 * - O(1).
 */
export interface BountiesCall_extend_bounty_expiry {
  __kind: 'extend_bounty_expiry';
  bountyId: number;
  remark: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ChildBountiesCall =
  | ChildBountiesCall_add_child_bounty
  | ChildBountiesCall_propose_curator
  | ChildBountiesCall_accept_curator
  | ChildBountiesCall_unassign_curator
  | ChildBountiesCall_award_child_bounty
  | ChildBountiesCall_claim_child_bounty
  | ChildBountiesCall_close_child_bounty;

/**
 * Add a new child-bounty.
 *
 * The dispatch origin for this call must be the curator of parent
 * bounty and the parent bounty must be in "active" state.
 *
 * Child-bounty gets added successfully & fund gets transferred from
 * parent bounty to child-bounty account, if parent bounty has enough
 * funds, else the call fails.
 *
 * Upper bound to maximum number of active  child bounties that can be
 * added are managed via runtime trait config
 * [`Config::MaxActiveChildBountyCount`].
 *
 * If the call is success, the status of child-bounty is updated to
 * "Added".
 *
 * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
 * - `value`: Value for executing the proposal.
 * - `description`: Text description for the child-bounty.
 */
export interface ChildBountiesCall_add_child_bounty {
  __kind: 'add_child_bounty';
  parentBountyId: number;
  value: bigint;
  description: Uint8Array;
}

/**
 * Propose curator for funded child-bounty.
 *
 * The dispatch origin for this call must be curator of parent bounty.
 *
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 *
 * Child-bounty must be in "Added" state, for processing the call. And
 * state of child-bounty is moved to "CuratorProposed" on successful
 * call completion.
 *
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 * - `curator`: Address of child-bounty curator.
 * - `fee`: payment fee to child-bounty curator for execution.
 */
export interface ChildBountiesCall_propose_curator {
  __kind: 'propose_curator';
  parentBountyId: number;
  childBountyId: number;
  curator: MultiAddress;
  fee: bigint;
}

/**
 * Accept the curator role for the child-bounty.
 *
 * The dispatch origin for this call must be the curator of this
 * child-bounty.
 *
 * A deposit will be reserved from the curator and refund upon
 * successful payout or cancellation.
 *
 * Fee for curator is deducted from curator fee of parent bounty.
 *
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 *
 * Child-bounty must be in "CuratorProposed" state, for processing the
 * call. And state of child-bounty is moved to "Active" on successful
 * call completion.
 *
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_accept_curator {
  __kind: 'accept_curator';
  parentBountyId: number;
  childBountyId: number;
}

/**
 * Unassign curator from a child-bounty.
 *
 * The dispatch origin for this call can be either `RejectOrigin`, or
 * the curator of the parent bounty, or any signed origin.
 *
 * For the origin other than T::RejectOrigin and the child-bounty
 * curator, parent bounty must be in active state, for this call to
 * work. We allow child-bounty curator and T::RejectOrigin to execute
 * this call irrespective of the parent bounty state.
 *
 * If this function is called by the `RejectOrigin` or the
 * parent bounty curator, we assume that the child-bounty curator is
 * malicious or inactive. As a result, child-bounty curator deposit is
 * slashed.
 *
 * If the origin is the child-bounty curator, we take this as a sign
 * that they are unable to do their job, and are willingly giving up.
 * We could slash the deposit, but for now we allow them to unreserve
 * their deposit and exit without issue. (We may want to change this if
 * it is abused.)
 *
 * Finally, the origin can be anyone iff the child-bounty curator is
 * "inactive". Expiry update due of parent bounty is used to estimate
 * inactive state of child-bounty curator.
 *
 * This allows anyone in the community to call out that a child-bounty
 * curator is not doing their due diligence, and we should pick a new
 * one. In this case the child-bounty curator deposit is slashed.
 *
 * State of child-bounty is moved to Added state on successful call
 * completion.
 *
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_unassign_curator {
  __kind: 'unassign_curator';
  parentBountyId: number;
  childBountyId: number;
}

/**
 * Award child-bounty to a beneficiary.
 *
 * The beneficiary will be able to claim the funds after a delay.
 *
 * The dispatch origin for this call must be the parent curator or
 * curator of this child-bounty.
 *
 * Parent bounty must be in active state, for this child-bounty call to
 * work.
 *
 * Child-bounty must be in active state, for processing the call. And
 * state of child-bounty is moved to "PendingPayout" on successful call
 * completion.
 *
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 * - `beneficiary`: Beneficiary account.
 */
export interface ChildBountiesCall_award_child_bounty {
  __kind: 'award_child_bounty';
  parentBountyId: number;
  childBountyId: number;
  beneficiary: MultiAddress;
}

/**
 * Claim the payout from an awarded child-bounty after payout delay.
 *
 * The dispatch origin for this call may be any signed origin.
 *
 * Call works independent of parent bounty state, No need for parent
 * bounty to be in active state.
 *
 * The Beneficiary is paid out with agreed bounty value. Curator fee is
 * paid & curator deposit is unreserved.
 *
 * Child-bounty must be in "PendingPayout" state, for processing the
 * call. And instance of child-bounty is removed from the state on
 * successful call completion.
 *
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_claim_child_bounty {
  __kind: 'claim_child_bounty';
  parentBountyId: number;
  childBountyId: number;
}

/**
 * Cancel a proposed or active child-bounty. Child-bounty account funds
 * are transferred to parent bounty account. The child-bounty curator
 * deposit may be unreserved if possible.
 *
 * The dispatch origin for this call must be either parent curator or
 * `T::RejectOrigin`.
 *
 * If the state of child-bounty is `Active`, curator deposit is
 * unreserved.
 *
 * If the state of child-bounty is `PendingPayout`, call fails &
 * returns `PendingPayout` error.
 *
 * For the origin other than T::RejectOrigin, parent bounty must be in
 * active state, for this child-bounty call to work. For origin
 * T::RejectOrigin execution is forced.
 *
 * Instance of child-bounty is removed from the state on successful
 * call completion.
 *
 * - `parent_bounty_id`: Index of parent bounty.
 * - `child_bounty_id`: Index of child bounty.
 */
export interface ChildBountiesCall_close_child_bounty {
  __kind: 'close_child_bounty';
  parentBountyId: number;
  childBountyId: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TipsCall =
  | TipsCall_report_awesome
  | TipsCall_retract_tip
  | TipsCall_tip_new
  | TipsCall_tip
  | TipsCall_close_tip
  | TipsCall_slash_tip;

/**
 * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`.
 *
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 *
 * Emits `NewTip` if successful.
 *
 * ## Complexity
 * - `O(R)` where `R` length of `reason`.
 *   - encoding and hashing of 'reason'
 */
export interface TipsCall_report_awesome {
  __kind: 'report_awesome';
  reason: Uint8Array;
  who: MultiAddress;
}

/**
 * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 *
 * If successful, the original deposit will be unreserved.
 *
 * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 * must have been reported by the signing account through `report_awesome` (and not
 * through `tip_new`).
 *
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 *
 * Emits `TipRetracted` if successful.
 *
 * ## Complexity
 * - `O(1)`
 *   - Depends on the length of `T::Hash` which is fixed.
 */
export interface TipsCall_retract_tip {
  __kind: 'retract_tip';
  hash: Uint8Array;
}

/**
 * Give a tip for something new; no finder's fee will be taken.
 *
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 *
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 *
 * Emits `NewTip` if successful.
 *
 * ## Complexity
 * - `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *     `ContainsLengthBound`. The actual cost depends on the implementation of
 *     `T::Tippers`.
 *   - `O(R)`: hashing and encoding of reason of length `R`
 */
export interface TipsCall_tip_new {
  __kind: 'tip_new';
  reason: Uint8Array;
  who: MultiAddress;
  tipValue: bigint;
}

/**
 * Declare a tip value for an already-open tip.
 *
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 *
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *   account ID.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 *
 * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 * has started.
 *
 * ## Complexity
 * - `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`, insert
 *   tip and check closing, `T` is charged as upper bound given by `ContainsLengthBound`.
 *   The actual cost depends on the implementation of `T::Tippers`.
 *
 *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *   is weighted as if almost full i.e of length `T-1`.
 */
export interface TipsCall_tip {
  __kind: 'tip';
  hash: Uint8Array;
  tipValue: bigint;
}

/**
 * Close and payout a tip.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * The tip identified by `hash` must have finished its countdown period.
 *
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 *
 * ## Complexity
 * - : `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`. `T`
 *   is charged as upper bound given by `ContainsLengthBound`. The actual cost depends on
 *   the implementation of `T::Tippers`.
 */
export interface TipsCall_close_tip {
  __kind: 'close_tip';
  hash: Uint8Array;
}

/**
 * Remove and slash an already-open tip.
 *
 * May only be called from `T::RejectOrigin`.
 *
 * As a result, the finder is slashed and the deposits are lost.
 *
 * Emits `TipSlashed` if successful.
 *
 * ## Complexity
 * - O(1).
 */
export interface TipsCall_slash_tip {
  __kind: 'slash_tip';
  hash: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NisCall =
  | NisCall_place_bid
  | NisCall_retract_bid
  | NisCall_fund_deficit
  | NisCall_thaw_private
  | NisCall_thaw_communal
  | NisCall_communify
  | NisCall_privatize;

/**
 * Place a bid.
 *
 * Origin must be Signed, and account must have at least `amount` in free balance.
 *
 * - `amount`: The amount of the bid; these funds will be reserved, and if/when
 *   consolidated, removed. Must be at least `MinBid`.
 * - `duration`: The number of periods before which the newly consolidated bid may be
 *   thawed. Must be greater than 1 and no more than `QueueCount`.
 *
 * Complexities:
 * - `Queues[duration].len()` (just take max).
 */
export interface NisCall_place_bid {
  __kind: 'place_bid';
  amount: bigint;
  duration: number;
}

/**
 * Retract a previously placed bid.
 *
 * Origin must be Signed, and the account should have previously issued a still-active bid
 * of `amount` for `duration`.
 *
 * - `amount`: The amount of the previous bid.
 * - `duration`: The duration of the previous bid.
 */
export interface NisCall_retract_bid {
  __kind: 'retract_bid';
  amount: bigint;
  duration: number;
}

/**
 * Ensure we have sufficient funding for all potential payouts.
 *
 * - `origin`: Must be accepted by `FundOrigin`.
 */
export interface NisCall_fund_deficit {
  __kind: 'fund_deficit';
}

/**
 * Reduce or remove an outstanding receipt, placing the according proportion of funds into
 * the account of the owner.
 *
 * - `origin`: Must be Signed and the account must be the owner of the receipt `index` as
 *   well as any fungible counterpart.
 * - `index`: The index of the receipt.
 * - `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
 *   `None`, then all of it should be.
 */
export interface NisCall_thaw_private {
  __kind: 'thaw_private';
  index: number;
  maybeProportion: bigint | undefined;
}

/**
 * Reduce or remove an outstanding receipt, placing the according proportion of funds into
 * the account of the owner.
 *
 * - `origin`: Must be Signed and the account must be the owner of the fungible counterpart
 *   for receipt `index`.
 * - `index`: The index of the receipt.
 */
export interface NisCall_thaw_communal {
  __kind: 'thaw_communal';
  index: number;
}

/**
 * Make a private receipt communal and create fungible counterparts for its owner.
 */
export interface NisCall_communify {
  __kind: 'communify';
  index: number;
}

/**
 * Make a communal receipt private and burn fungible counterparts from its owner.
 */
export interface NisCall_privatize {
  __kind: 'privatize';
  index: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NisCounterpartBalancesCall =
  | NisCounterpartBalancesCall_transfer
  | NisCounterpartBalancesCall_set_balance
  | NisCounterpartBalancesCall_force_transfer
  | NisCounterpartBalancesCall_transfer_keep_alive
  | NisCounterpartBalancesCall_transfer_all
  | NisCounterpartBalancesCall_force_unreserve;

/**
 * Transfer some liquid free balance to another account.
 *
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 *
 * The dispatch origin for this call must be `Signed` by the transactor.
 *
 * ## Complexity
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 *
 * Related functions:
 *
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 */
export interface NisCounterpartBalancesCall_transfer {
  __kind: 'transfer';
  dest: MultiAddress;
  value: bigint;
}

/**
 * Set the balances of a given account.
 *
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 *
 * The dispatch origin for this call is `root`.
 */
export interface NisCounterpartBalancesCall_set_balance {
  __kind: 'set_balance';
  who: MultiAddress;
  newFree: bigint;
  newReserved: bigint;
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * ## Complexity
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 */
export interface NisCounterpartBalancesCall_force_transfer {
  __kind: 'force_transfer';
  source: MultiAddress;
  dest: MultiAddress;
  value: bigint;
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 *
 * 99% of the time you want [`transfer`] instead.
 *
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface NisCounterpartBalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive';
  dest: MultiAddress;
  value: bigint;
}

/**
 * Transfer the entire transferable balance from the caller account.
 *
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 *
 * The dispatch origin of this call must be Signed.
 *
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). ## Complexity
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 */
export interface NisCounterpartBalancesCall_transfer_all {
  __kind: 'transfer_all';
  dest: MultiAddress;
  keepAlive: boolean;
}

/**
 * Unreserve some balance from a user by force.
 *
 * Can only be called by ROOT.
 */
export interface NisCounterpartBalancesCall_force_unreserve {
  __kind: 'force_unreserve';
  who: MultiAddress;
  amount: bigint;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ConfigurationCall =
  | ConfigurationCall_set_validation_upgrade_cooldown
  | ConfigurationCall_set_validation_upgrade_delay
  | ConfigurationCall_set_code_retention_period
  | ConfigurationCall_set_max_code_size
  | ConfigurationCall_set_max_pov_size
  | ConfigurationCall_set_max_head_data_size
  | ConfigurationCall_set_parathread_cores
  | ConfigurationCall_set_parathread_retries
  | ConfigurationCall_set_group_rotation_frequency
  | ConfigurationCall_set_chain_availability_period
  | ConfigurationCall_set_thread_availability_period
  | ConfigurationCall_set_scheduling_lookahead
  | ConfigurationCall_set_max_validators_per_core
  | ConfigurationCall_set_max_validators
  | ConfigurationCall_set_dispute_period
  | ConfigurationCall_set_dispute_post_conclusion_acceptance_period
  | ConfigurationCall_set_dispute_conclusion_by_time_out_period
  | ConfigurationCall_set_no_show_slots
  | ConfigurationCall_set_n_delay_tranches
  | ConfigurationCall_set_zeroth_delay_tranche_width
  | ConfigurationCall_set_needed_approvals
  | ConfigurationCall_set_relay_vrf_modulo_samples
  | ConfigurationCall_set_max_upward_queue_count
  | ConfigurationCall_set_max_upward_queue_size
  | ConfigurationCall_set_max_downward_message_size
  | ConfigurationCall_set_ump_service_total_weight
  | ConfigurationCall_set_max_upward_message_size
  | ConfigurationCall_set_max_upward_message_num_per_candidate
  | ConfigurationCall_set_hrmp_open_request_ttl
  | ConfigurationCall_set_hrmp_sender_deposit
  | ConfigurationCall_set_hrmp_recipient_deposit
  | ConfigurationCall_set_hrmp_channel_max_capacity
  | ConfigurationCall_set_hrmp_channel_max_total_size
  | ConfigurationCall_set_hrmp_max_parachain_inbound_channels
  | ConfigurationCall_set_hrmp_max_parathread_inbound_channels
  | ConfigurationCall_set_hrmp_channel_max_message_size
  | ConfigurationCall_set_hrmp_max_parachain_outbound_channels
  | ConfigurationCall_set_hrmp_max_parathread_outbound_channels
  | ConfigurationCall_set_hrmp_max_message_num_per_candidate
  | ConfigurationCall_set_ump_max_individual_weight
  | ConfigurationCall_set_pvf_checking_enabled
  | ConfigurationCall_set_pvf_voting_ttl
  | ConfigurationCall_set_minimum_validation_upgrade_delay
  | ConfigurationCall_set_bypass_consistency_check;

/**
 * Set the validation upgrade cooldown.
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
  __kind: 'set_validation_upgrade_cooldown';
  new: number;
}

/**
 * Set the validation upgrade delay.
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
  __kind: 'set_validation_upgrade_delay';
  new: number;
}

/**
 * Set the acceptance period for an included candidate.
 */
export interface ConfigurationCall_set_code_retention_period {
  __kind: 'set_code_retention_period';
  new: number;
}

/**
 * Set the max validation code size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_code_size {
  __kind: 'set_max_code_size';
  new: number;
}

/**
 * Set the max POV block size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_pov_size {
  __kind: 'set_max_pov_size';
  new: number;
}

/**
 * Set the max head data size for paras.
 */
export interface ConfigurationCall_set_max_head_data_size {
  __kind: 'set_max_head_data_size';
  new: number;
}

/**
 * Set the number of parathread execution cores.
 */
export interface ConfigurationCall_set_parathread_cores {
  __kind: 'set_parathread_cores';
  new: number;
}

/**
 * Set the number of retries for a particular parathread.
 */
export interface ConfigurationCall_set_parathread_retries {
  __kind: 'set_parathread_retries';
  new: number;
}

/**
 * Set the parachain validator-group rotation frequency
 */
export interface ConfigurationCall_set_group_rotation_frequency {
  __kind: 'set_group_rotation_frequency';
  new: number;
}

/**
 * Set the availability period for parachains.
 */
export interface ConfigurationCall_set_chain_availability_period {
  __kind: 'set_chain_availability_period';
  new: number;
}

/**
 * Set the availability period for parathreads.
 */
export interface ConfigurationCall_set_thread_availability_period {
  __kind: 'set_thread_availability_period';
  new: number;
}

/**
 * Set the scheduling lookahead, in expected number of blocks at peak throughput.
 */
export interface ConfigurationCall_set_scheduling_lookahead {
  __kind: 'set_scheduling_lookahead';
  new: number;
}

/**
 * Set the maximum number of validators to assign to any core.
 */
export interface ConfigurationCall_set_max_validators_per_core {
  __kind: 'set_max_validators_per_core';
  new: number | undefined;
}

/**
 * Set the maximum number of validators to use in parachain consensus.
 */
export interface ConfigurationCall_set_max_validators {
  __kind: 'set_max_validators';
  new: number | undefined;
}

/**
 * Set the dispute period, in number of sessions to keep for disputes.
 */
export interface ConfigurationCall_set_dispute_period {
  __kind: 'set_dispute_period';
  new: number;
}

/**
 * Set the dispute post conclusion acceptance period.
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
  __kind: 'set_dispute_post_conclusion_acceptance_period';
  new: number;
}

/**
 * Set the dispute conclusion by time out period.
 */
export interface ConfigurationCall_set_dispute_conclusion_by_time_out_period {
  __kind: 'set_dispute_conclusion_by_time_out_period';
  new: number;
}

/**
 * Set the no show slots, in number of number of consensus slots.
 * Must be at least 1.
 */
export interface ConfigurationCall_set_no_show_slots {
  __kind: 'set_no_show_slots';
  new: number;
}

/**
 * Set the total number of delay tranches.
 */
export interface ConfigurationCall_set_n_delay_tranches {
  __kind: 'set_n_delay_tranches';
  new: number;
}

/**
 * Set the zeroth delay tranche width.
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
  __kind: 'set_zeroth_delay_tranche_width';
  new: number;
}

/**
 * Set the number of validators needed to approve a block.
 */
export interface ConfigurationCall_set_needed_approvals {
  __kind: 'set_needed_approvals';
  new: number;
}

/**
 * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
  __kind: 'set_relay_vrf_modulo_samples';
  new: number;
}

/**
 * Sets the maximum items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_count {
  __kind: 'set_max_upward_queue_count';
  new: number;
}

/**
 * Sets the maximum total size of items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_size {
  __kind: 'set_max_upward_queue_size';
  new: number;
}

/**
 * Set the critical downward message size.
 */
export interface ConfigurationCall_set_max_downward_message_size {
  __kind: 'set_max_downward_message_size';
  new: number;
}

/**
 * Sets the soft limit for the phase of dispatching dispatchable upward messages.
 */
export interface ConfigurationCall_set_ump_service_total_weight {
  __kind: 'set_ump_service_total_weight';
  new: Weight;
}

/**
 * Sets the maximum size of an upward message that can be sent by a candidate.
 */
export interface ConfigurationCall_set_max_upward_message_size {
  __kind: 'set_max_upward_message_size';
  new: number;
}

/**
 * Sets the maximum number of messages that a candidate can contain.
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
  __kind: 'set_max_upward_message_num_per_candidate';
  new: number;
}

/**
 * Sets the number of sessions after which an HRMP open channel request expires.
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
  __kind: 'set_hrmp_open_request_ttl';
  new: number;
}

/**
 * Sets the amount of funds that the sender should provide for opening an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
  __kind: 'set_hrmp_sender_deposit';
  new: bigint;
}

/**
 * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
 * channel.
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
  __kind: 'set_hrmp_recipient_deposit';
  new: bigint;
}

/**
 * Sets the maximum number of messages allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
  __kind: 'set_hrmp_channel_max_capacity';
  new: number;
}

/**
 * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
  __kind: 'set_hrmp_channel_max_total_size';
  new: number;
}

/**
 * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
  __kind: 'set_hrmp_max_parachain_inbound_channels';
  new: number;
}

/**
 * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_inbound_channels {
  __kind: 'set_hrmp_max_parathread_inbound_channels';
  new: number;
}

/**
 * Sets the maximum size of a message that could ever be put into an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
  __kind: 'set_hrmp_channel_max_message_size';
  new: number;
}

/**
 * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
  __kind: 'set_hrmp_max_parachain_outbound_channels';
  new: number;
}

/**
 * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_outbound_channels {
  __kind: 'set_hrmp_max_parathread_outbound_channels';
  new: number;
}

/**
 * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
  __kind: 'set_hrmp_max_message_num_per_candidate';
  new: number;
}

/**
 * Sets the maximum amount of weight any individual upward message may consume.
 */
export interface ConfigurationCall_set_ump_max_individual_weight {
  __kind: 'set_ump_max_individual_weight';
  new: Weight;
}

/**
 * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
 */
export interface ConfigurationCall_set_pvf_checking_enabled {
  __kind: 'set_pvf_checking_enabled';
  new: boolean;
}

/**
 * Set the number of session changes after which a PVF pre-checking voting is rejected.
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
  __kind: 'set_pvf_voting_ttl';
  new: number;
}

/**
 * Sets the minimum delay between announcing the upgrade block for a parachain until the
 * upgrade taking place.
 *
 * See the field documentation for information and constraints for the new value.
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
  __kind: 'set_minimum_validation_upgrade_delay';
  new: number;
}

/**
 * Setting this to true will disable consistency checks for the configuration setters.
 * Use with caution.
 */
export interface ConfigurationCall_set_bypass_consistency_check {
  __kind: 'set_bypass_consistency_check';
  new: boolean;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasSharedCall = never;

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParaInclusionCall = never;

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParaInherentCall = ParaInherentCall_enter;

/**
 * Enter the paras inherent. This will process bitfields and backed candidates.
 */
export interface ParaInherentCall_enter {
  __kind: 'enter';
  data: V2InherentData;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasCall =
  | ParasCall_force_set_current_code
  | ParasCall_force_set_current_head
  | ParasCall_force_schedule_code_upgrade
  | ParasCall_force_note_new_head
  | ParasCall_force_queue_action
  | ParasCall_add_trusted_validation_code
  | ParasCall_poke_unused_validation_code
  | ParasCall_include_pvf_check_statement;

/**
 * Set the storage for the parachain validation code immediately.
 */
export interface ParasCall_force_set_current_code {
  __kind: 'force_set_current_code';
  para: number;
  newCode: Uint8Array;
}

/**
 * Set the storage for the current parachain head data immediately.
 */
export interface ParasCall_force_set_current_head {
  __kind: 'force_set_current_head';
  para: number;
  newHead: Uint8Array;
}

/**
 * Schedule an upgrade as if it was scheduled in the given relay parent block.
 */
export interface ParasCall_force_schedule_code_upgrade {
  __kind: 'force_schedule_code_upgrade';
  para: number;
  newCode: Uint8Array;
  relayParentNumber: number;
}

/**
 * Note a new block head for para within the context of the current block.
 */
export interface ParasCall_force_note_new_head {
  __kind: 'force_note_new_head';
  para: number;
  newHead: Uint8Array;
}

/**
 * Put a parachain directly into the next session's action queue.
 * We can't queue it any sooner than this without going into the
 * initializer...
 */
export interface ParasCall_force_queue_action {
  __kind: 'force_queue_action';
  para: number;
}

/**
 * Adds the validation code to the storage.
 *
 * The code will not be added if it is already present. Additionally, if PVF pre-checking
 * is running for that code, it will be instantly accepted.
 *
 * Otherwise, the code will be added into the storage. Note that the code will be added
 * into storage with reference count 0. This is to account the fact that there are no users
 * for this code yet. The caller will have to make sure that this code eventually gets
 * used by some parachain or removed from the storage to avoid storage leaks. For the latter
 * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
 *
 * This function is mainly meant to be used for upgrading parachains that do not follow
 * the go-ahead signal while the PVF pre-checking feature is enabled.
 */
export interface ParasCall_add_trusted_validation_code {
  __kind: 'add_trusted_validation_code';
  validationCode: Uint8Array;
}

/**
 * Remove the validation code from the storage iff the reference count is 0.
 *
 * This is better than removing the storage directly, because it will not remove the code
 * that was suddenly got used by some parachain while this dispatchable was pending
 * dispatching.
 */
export interface ParasCall_poke_unused_validation_code {
  __kind: 'poke_unused_validation_code';
  validationCodeHash: Uint8Array;
}

/**
 * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
 * enacts the results if that was the last vote before achieving the supermajority.
 */
export interface ParasCall_include_pvf_check_statement {
  __kind: 'include_pvf_check_statement';
  stmt: V2PvfCheckStatement;
  signature: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type InitializerCall = InitializerCall_force_approve;

/**
 * Issue a signal to the consensus engine to forcibly act as though all parachain
 * blocks in all relay chain blocks up to and including the given number in the current
 * chain are valid and should be finalized.
 */
export interface InitializerCall_force_approve {
  __kind: 'force_approve';
  upTo: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpCall = never;

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UmpCall = UmpCall_service_overweight;

/**
 * Service a single overweight upward message.
 *
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 *
 * Errors:
 * - `UnknownMessageIndex`: Message of `index` is unknown.
 * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
 *
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface UmpCall_service_overweight {
  __kind: 'service_overweight';
  index: bigint;
  weightLimit: Weight;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HrmpCall =
  | HrmpCall_hrmp_init_open_channel
  | HrmpCall_hrmp_accept_open_channel
  | HrmpCall_hrmp_close_channel
  | HrmpCall_force_clean_hrmp
  | HrmpCall_force_process_hrmp_open
  | HrmpCall_force_process_hrmp_close
  | HrmpCall_hrmp_cancel_open_request
  | HrmpCall_force_open_hrmp_channel;

/**
 * Initiate opening a channel from a parachain to a given recipient with given channel
 * parameters.
 *
 * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
 * - `proposed_max_message_size` - specifies the maximum size of the messages.
 *
 * These numbers are a subject to the relay-chain configuration limits.
 *
 * The channel can be opened only after the recipient confirms it and only on a session
 * change.
 */
export interface HrmpCall_hrmp_init_open_channel {
  __kind: 'hrmp_init_open_channel';
  recipient: number;
  proposedMaxCapacity: number;
  proposedMaxMessageSize: number;
}

/**
 * Accept a pending open channel request from the given sender.
 *
 * The channel will be opened only on the next session boundary.
 */
export interface HrmpCall_hrmp_accept_open_channel {
  __kind: 'hrmp_accept_open_channel';
  sender: number;
}

/**
 * Initiate unilateral closing of a channel. The origin must be either the sender or the
 * recipient in the channel being closed.
 *
 * The closure can only happen on a session change.
 */
export interface HrmpCall_hrmp_close_channel {
  __kind: 'hrmp_close_channel';
  channelId: HrmpChannelId;
}

/**
 * This extrinsic triggers the cleanup of all the HRMP storage items that
 * a para may have. Normally this happens once per session, but this allows
 * you to trigger the cleanup immediately for a specific parachain.
 *
 * Origin must be Root.
 *
 * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
 */
export interface HrmpCall_force_clean_hrmp {
  __kind: 'force_clean_hrmp';
  para: number;
  inbound: number;
  outbound: number;
}

/**
 * Force process HRMP open channel requests.
 *
 * If there are pending HRMP open channel requests, you can use this
 * function process all of those requests immediately.
 *
 * Total number of opening channels must be provided as witness data of weighing.
 */
export interface HrmpCall_force_process_hrmp_open {
  __kind: 'force_process_hrmp_open';
  channels: number;
}

/**
 * Force process HRMP close channel requests.
 *
 * If there are pending HRMP close channel requests, you can use this
 * function process all of those requests immediately.
 *
 * Total number of closing channels must be provided as witness data of weighing.
 */
export interface HrmpCall_force_process_hrmp_close {
  __kind: 'force_process_hrmp_close';
  channels: number;
}

/**
 * This cancels a pending open channel request. It can be canceled by either of the sender
 * or the recipient for that request. The origin must be either of those.
 *
 * The cancellation happens immediately. It is not possible to cancel the request if it is
 * already accepted.
 *
 * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
 * witness data.
 */
export interface HrmpCall_hrmp_cancel_open_request {
  __kind: 'hrmp_cancel_open_request';
  channelId: HrmpChannelId;
  openRequests: number;
}

/**
 * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
 * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
 * Chain's configured limits.
 *
 * Expected use is when one of the `ParaId`s involved in the channel is governed by the
 * Relay Chain, e.g. a common good parachain.
 */
export interface HrmpCall_force_open_hrmp_channel {
  __kind: 'force_open_hrmp_channel';
  sender: number;
  recipient: number;
  maxCapacity: number;
  maxMessageSize: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze;

export interface ParasDisputesCall_force_unfreeze {
  __kind: 'force_unfreeze';
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned;

export interface ParasSlashingCall_report_dispute_lost_unsigned {
  __kind: 'report_dispute_lost_unsigned';
  disputeProof: DisputeProof;
  keyOwnerProof: MembershipProof;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RegistrarCall =
  | RegistrarCall_register
  | RegistrarCall_force_register
  | RegistrarCall_deregister
  | RegistrarCall_swap
  | RegistrarCall_remove_lock
  | RegistrarCall_reserve
  | RegistrarCall_add_lock
  | RegistrarCall_schedule_code_upgrade
  | RegistrarCall_set_current_head;

/**
 * Register head data and validation code for a reserved Para Id.
 *
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin.
 * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
 * - `genesis_head`: The genesis head data of the parachain/thread.
 * - `validation_code`: The initial validation code of the parachain/thread.
 *
 * ## Deposits/Fees
 * The origin signed account must reserve a corresponding deposit for the registration. Anything already
 * reserved previously for this para ID is accounted for.
 *
 * ## Events
 * The `Registered` event is emitted in case of success.
 */
export interface RegistrarCall_register {
  __kind: 'register';
  id: number;
  genesisHead: Uint8Array;
  validationCode: Uint8Array;
}

/**
 * Force the registration of a Para Id on the relay chain.
 *
 * This function must be called by a Root origin.
 *
 * The deposit taken can be specified for this registration. Any `ParaId`
 * can be registered, including sub-1000 IDs which are System Parachains.
 */
export interface RegistrarCall_force_register {
  __kind: 'force_register';
  who: Uint8Array;
  deposit: bigint;
  id: number;
  genesisHead: Uint8Array;
  validationCode: Uint8Array;
}

/**
 * Deregister a Para Id, freeing all data and returning any deposit.
 *
 * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
 */
export interface RegistrarCall_deregister {
  __kind: 'deregister';
  id: number;
}

/**
 * Swap a parachain with another parachain or parathread.
 *
 * The origin must be Root, the `para` owner, or the `para` itself.
 *
 * The swap will happen only if there is already an opposite swap pending. If there is not,
 * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 *
 * The `ParaId`s remain mapped to the same head data and code so external code can rely on
 * `ParaId` to be a long-term identifier of a notional "parachain". However, their
 * scheduling info (i.e. whether they're a parathread or parachain), auction information
 * and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
  __kind: 'swap';
  id: number;
  other: number;
}

/**
 * Remove a manager lock from a para. This will allow the manager of a
 * previously locked para to deregister or swap a para without using governance.
 *
 * Can only be called by the Root origin or the parachain.
 */
export interface RegistrarCall_remove_lock {
  __kind: 'remove_lock';
  para: number;
}

/**
 * Reserve a Para Id on the relay chain.
 *
 * This function will reserve a new Para Id to be owned/managed by the origin account.
 * The origin account is able to register head data and validation code using `register` to create
 * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
 *
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
 *
 * ## Deposits/Fees
 * The origin must reserve a deposit of `ParaDeposit` for the registration.
 *
 * ## Events
 * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
 */
export interface RegistrarCall_reserve {
  __kind: 'reserve';
}

/**
 * Add a manager lock from a para. This will prevent the manager of a
 * para to deregister or swap a para.
 *
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_add_lock {
  __kind: 'add_lock';
  para: number;
}

/**
 * Schedule a parachain upgrade.
 *
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_schedule_code_upgrade {
  __kind: 'schedule_code_upgrade';
  para: number;
  newCode: Uint8Array;
}

/**
 * Set the parachain's current head.
 *
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_set_current_head {
  __kind: 'set_current_head';
  para: number;
  newHead: Uint8Array;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SlotsCall =
  | SlotsCall_force_lease
  | SlotsCall_clear_all_leases
  | SlotsCall_trigger_onboard;

/**
 * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
 * independently of any other on-chain mechanism to use it.
 *
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_force_lease {
  __kind: 'force_lease';
  para: number;
  leaser: Uint8Array;
  amount: bigint;
  periodBegin: number;
  periodCount: number;
}

/**
 * Clear all leases for a Para Id, refunding any deposits back to the original owners.
 *
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_clear_all_leases {
  __kind: 'clear_all_leases';
  para: number;
}

/**
 * Try to onboard a parachain that has a lease for the current lease period.
 *
 * This function can be useful if there was some state issue with a para that should
 * have onboarded, but was unable to. As long as they have a lease period, we can
 * let them onboard from here.
 *
 * Origin must be signed, but can be called by anyone.
 */
export interface SlotsCall_trigger_onboard {
  __kind: 'trigger_onboard';
  para: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuctionsCall =
  | AuctionsCall_new_auction
  | AuctionsCall_bid
  | AuctionsCall_cancel_auction;

/**
 * Create a new auction.
 *
 * This can only happen when there isn't already an auction in progress and may only be
 * called by the root origin. Accepts the `duration` of this auction and the
 * `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface AuctionsCall_new_auction {
  __kind: 'new_auction';
  duration: number;
  leasePeriodIndex: number;
}

/**
 * Make a new bid from an account (including a parachain account) for deploying a new
 * parachain.
 *
 * Multiple simultaneous bids from the same bidder are allowed only as long as all active
 * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 *
 * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 * funded by) the same account.
 * - `auction_index` is the index of the auction to bid on. Should just be the present
 * value of `AuctionCounter`.
 * - `first_slot` is the first lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `last_slot` is the last lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `amount` is the amount to bid to be held as deposit for the parachain should the
 * bid win. This amount is held throughout the range.
 */
export interface AuctionsCall_bid {
  __kind: 'bid';
  para: number;
  auctionIndex: number;
  firstSlot: number;
  lastSlot: number;
  amount: bigint;
}

/**
 * Cancel an in-progress auction.
 *
 * Can only be called by Root origin.
 */
export interface AuctionsCall_cancel_auction {
  __kind: 'cancel_auction';
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CrowdloanCall =
  | CrowdloanCall_create
  | CrowdloanCall_contribute
  | CrowdloanCall_withdraw
  | CrowdloanCall_refund
  | CrowdloanCall_dissolve
  | CrowdloanCall_edit
  | CrowdloanCall_add_memo
  | CrowdloanCall_poke
  | CrowdloanCall_contribute_all;

/**
 * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
 *
 * This applies a lock to your parachain configuration, ensuring that it cannot be changed
 * by the parachain manager.
 */
export interface CrowdloanCall_create {
  __kind: 'create';
  index: number;
  cap: bigint;
  firstPeriod: number;
  lastPeriod: number;
  end: number;
  verifier: MultiSigner | undefined;
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute {
  __kind: 'contribute';
  index: number;
  value: bigint;
  signature: MultiSignature | undefined;
}

/**
 * Withdraw full balance of a specific contributor.
 *
 * Origin must be signed, but can come from anyone.
 *
 * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
 * flag must be set. For a fund to be ready for retirement, then:
 * - it must not already be in retirement;
 * - the amount of raised funds must be bigger than the _free_ balance of the account;
 * - and either:
 *   - the block number must be at least `end`; or
 *   - the current lease period must be greater than the fund's `last_period`.
 *
 * In this case, the fund's retirement flag is set and its `end` is reset to the current block
 * number.
 *
 * - `who`: The account whose contribution should be withdrawn.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface CrowdloanCall_withdraw {
  __kind: 'withdraw';
  who: Uint8Array;
  index: number;
}

/**
 * Automatically refund contributors of an ended crowdloan.
 * Due to weight restrictions, this function may need to be called multiple
 * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
 *
 * Origin must be signed, but can come from anyone.
 */
export interface CrowdloanCall_refund {
  __kind: 'refund';
  index: number;
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface CrowdloanCall_dissolve {
  __kind: 'dissolve';
  index: number;
}

/**
 * Edit the configuration for an in-progress crowdloan.
 *
 * Can only be called by Root origin.
 */
export interface CrowdloanCall_edit {
  __kind: 'edit';
  index: number;
  cap: bigint;
  firstPeriod: number;
  lastPeriod: number;
  end: number;
  verifier: MultiSigner | undefined;
}

/**
 * Add an optional memo to an existing crowdloan contribution.
 *
 * Origin must be Signed, and the user must have contributed to the crowdloan.
 */
export interface CrowdloanCall_add_memo {
  __kind: 'add_memo';
  index: number;
  memo: Uint8Array;
}

/**
 * Poke the fund into `NewRaise`
 *
 * Origin must be Signed, and the fund has non-zero raise.
 */
export interface CrowdloanCall_poke {
  __kind: 'poke';
  index: number;
}

/**
 * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute_all {
  __kind: 'contribute_all';
  index: number;
  signature: MultiSignature | undefined;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmPalletCall =
  | XcmPalletCall_send
  | XcmPalletCall_teleport_assets
  | XcmPalletCall_reserve_transfer_assets
  | XcmPalletCall_execute
  | XcmPalletCall_force_xcm_version
  | XcmPalletCall_force_default_xcm_version
  | XcmPalletCall_force_subscribe_version_notify
  | XcmPalletCall_force_unsubscribe_version_notify
  | XcmPalletCall_limited_reserve_transfer_assets
  | XcmPalletCall_limited_teleport_assets;

export interface XcmPalletCall_send {
  __kind: 'send';
  dest: VersionedMultiLocation;
  message: VersionedXcm;
}

/**
 * Teleport some assets from the local chain to some destination chain.
 *
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 *
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface XcmPalletCall_teleport_assets {
  __kind: 'teleport_assets';
  dest: VersionedMultiLocation;
  beneficiary: VersionedMultiLocation;
  assets: VersionedMultiAssets;
  feeAssetItem: number;
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 *
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 *
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface XcmPalletCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets';
  dest: VersionedMultiLocation;
  beneficiary: VersionedMultiLocation;
  assets: VersionedMultiAssets;
  feeAssetItem: number;
}

/**
 * Execute an XCM message from a local, signed, origin.
 *
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 *
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 *
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface XcmPalletCall_execute {
  __kind: 'execute';
  message: Type_435;
  maxWeight: Weight;
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 *
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface XcmPalletCall_force_xcm_version {
  __kind: 'force_xcm_version';
  location: V3MultiLocation;
  xcmVersion: number;
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 *
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface XcmPalletCall_force_default_xcm_version {
  __kind: 'force_default_xcm_version';
  maybeXcmVersion: number | undefined;
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 *
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface XcmPalletCall_force_subscribe_version_notify {
  __kind: 'force_subscribe_version_notify';
  location: VersionedMultiLocation;
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 *
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface XcmPalletCall_force_unsubscribe_version_notify {
  __kind: 'force_unsubscribe_version_notify';
  location: VersionedMultiLocation;
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 *
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 *
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface XcmPalletCall_limited_reserve_transfer_assets {
  __kind: 'limited_reserve_transfer_assets';
  dest: VersionedMultiLocation;
  beneficiary: VersionedMultiLocation;
  assets: VersionedMultiAssets;
  feeAssetItem: number;
  weightLimit: V3WeightLimit;
}

/**
 * Teleport some assets from the local chain to some destination chain.
 *
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 *
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface XcmPalletCall_limited_teleport_assets {
  __kind: 'limited_teleport_assets';
  dest: VersionedMultiLocation;
  beneficiary: VersionedMultiLocation;
  assets: VersionedMultiAssets;
  feeAssetItem: number;
  weightLimit: V3WeightLimit;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BeefyCall =
  | BeefyCall_report_equivocation
  | BeefyCall_report_equivocation_unsigned;

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface BeefyCall_report_equivocation {
  __kind: 'report_equivocation';
  equivocationProof: Type_444;
  keyOwnerProof: MembershipProof;
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 *
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BeefyCall_report_equivocation_unsigned {
  __kind: 'report_equivocation_unsigned';
  equivocationProof: Type_444;
  keyOwnerProof: MembershipProof;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasSudoWrapperCall =
  | ParasSudoWrapperCall_sudo_schedule_para_initialize
  | ParasSudoWrapperCall_sudo_schedule_para_cleanup
  | ParasSudoWrapperCall_sudo_schedule_parathread_upgrade
  | ParasSudoWrapperCall_sudo_schedule_parachain_downgrade
  | ParasSudoWrapperCall_sudo_queue_downward_xcm
  | ParasSudoWrapperCall_sudo_establish_hrmp_channel;

/**
 * Schedule a para to be initialized at the start of the next session.
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_initialize {
  __kind: 'sudo_schedule_para_initialize';
  id: number;
  genesis: ParaGenesisArgs;
}

/**
 * Schedule a para to be cleaned up at the start of the next session.
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_cleanup {
  __kind: 'sudo_schedule_para_cleanup';
  id: number;
}

/**
 * Upgrade a parathread to a parachain
 */
export interface ParasSudoWrapperCall_sudo_schedule_parathread_upgrade {
  __kind: 'sudo_schedule_parathread_upgrade';
  id: number;
}

/**
 * Downgrade a parachain to a parathread
 */
export interface ParasSudoWrapperCall_sudo_schedule_parachain_downgrade {
  __kind: 'sudo_schedule_parachain_downgrade';
  id: number;
}

/**
 * Send a downward XCM to the given para.
 *
 * The given parachain should exist and the payload should not exceed the preconfigured size
 * `config.max_downward_message_size`.
 */
export interface ParasSudoWrapperCall_sudo_queue_downward_xcm {
  __kind: 'sudo_queue_downward_xcm';
  id: number;
  xcm: VersionedXcm;
}

/**
 * Forcefully establish a channel from the sender to the recipient.
 *
 * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
 * `Hrmp::hrmp_accept_open_channel`.
 */
export interface ParasSudoWrapperCall_sudo_establish_hrmp_channel {
  __kind: 'sudo_establish_hrmp_channel';
  sender: number;
  recipient: number;
  maxCapacity: number;
  maxMessageSize: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssignedSlotsCall =
  | AssignedSlotsCall_assign_perm_parachain_slot
  | AssignedSlotsCall_assign_temp_parachain_slot
  | AssignedSlotsCall_unassign_parachain_slot;

/**
 * Assign a permanent parachain slot and immediately create a lease for it.
 */
export interface AssignedSlotsCall_assign_perm_parachain_slot {
  __kind: 'assign_perm_parachain_slot';
  id: number;
}

/**
 * Assign a temporary parachain slot. The function tries to create a lease for it
 * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
 * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
 */
export interface AssignedSlotsCall_assign_temp_parachain_slot {
  __kind: 'assign_temp_parachain_slot';
  id: number;
  leasePeriodStart: SlotLeasePeriodStart;
}

/**
 * Unassign a permanent or temporary parachain slot
 */
export interface AssignedSlotsCall_unassign_parachain_slot {
  __kind: 'unassign_parachain_slot';
  id: number;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ValidatorManagerCall =
  | ValidatorManagerCall_register_validators
  | ValidatorManagerCall_deregister_validators;

/**
 * Add new validators to the set.
 *
 * The new validators will be active from current session + 2.
 */
export interface ValidatorManagerCall_register_validators {
  __kind: 'register_validators';
  validators: Uint8Array[];
}

/**
 * Remove validators from the set.
 *
 * The removed validators will be deactivated from current session + 2.
 */
export interface ValidatorManagerCall_deregister_validators {
  __kind: 'deregister_validators';
  validators: Uint8Array[];
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StateTrieMigrationCall =
  | StateTrieMigrationCall_control_auto_migration
  | StateTrieMigrationCall_continue_migrate
  | StateTrieMigrationCall_migrate_custom_top
  | StateTrieMigrationCall_migrate_custom_child
  | StateTrieMigrationCall_set_signed_max_limits
  | StateTrieMigrationCall_force_set_progress;

/**
 * Control the automatic migration.
 *
 * The dispatch origin of this call must be [`Config::ControlOrigin`].
 */
export interface StateTrieMigrationCall_control_auto_migration {
  __kind: 'control_auto_migration';
  maybeConfig: MigrationLimits | undefined;
}

/**
 * Continue the migration for the given `limits`.
 *
 * The dispatch origin of this call can be any signed account.
 *
 * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
 * Upon successful execution, the transaction fee is returned.
 *
 * The (potentially over-estimated) of the byte length of all the data read must be
 * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
 * that executing the current `MigrationTask` with the given `limits` will not exceed
 * `real_size_upper` bytes of read data.
 *
 * The `witness_task` is merely a helper to prevent the caller from being slashed or
 * generally trigger a migration that they do not intend. This parameter is just a message
 * from caller, saying that they believed `witness_task` was the last state of the
 * migration, and they only wish for their transaction to do anything, if this assumption
 * holds. In case `witness_task` does not match, the transaction fails.
 *
 * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
 * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
 * `size` limit can always be overwritten.
 */
export interface StateTrieMigrationCall_continue_migrate {
  __kind: 'continue_migrate';
  limits: MigrationLimits;
  realSizeUpper: number;
  witnessTask: MigrationTask;
}

/**
 * Migrate the list of top keys by iterating each of them one by one.
 *
 * This does not affect the global migration process tracker ([`MigrationProcess`]), and
 * should only be used in case any keys are leftover due to a bug.
 */
export interface StateTrieMigrationCall_migrate_custom_top {
  __kind: 'migrate_custom_top';
  keys: Uint8Array[];
  witnessSize: number;
}

/**
 * Migrate the list of child keys by iterating each of them one by one.
 *
 * All of the given child keys must be present under one `child_root`.
 *
 * This does not affect the global migration process tracker ([`MigrationProcess`]), and
 * should only be used in case any keys are leftover due to a bug.
 */
export interface StateTrieMigrationCall_migrate_custom_child {
  __kind: 'migrate_custom_child';
  root: Uint8Array;
  childKeys: Uint8Array[];
  totalSize: number;
}

/**
 * Set the maximum limit of the signed migration.
 */
export interface StateTrieMigrationCall_set_signed_max_limits {
  __kind: 'set_signed_max_limits';
  limits: MigrationLimits;
}

/**
 * Forcefully set the progress the running migration.
 *
 * This is only useful in one case: the next key to migrate is too big to be migrated with
 * a signed account, in a parachain context, and we simply want to skip it. A reasonable
 * example of this would be `:code:`, which is both very expensive to migrate, and commonly
 * used, so probably it is already migrated.
 *
 * In case you mess things up, you can also, in principle, use this to reset the migration
 * process.
 */
export interface StateTrieMigrationCall_force_set_progress {
  __kind: 'force_set_progress';
  progressTop: Progress;
  progressChild: Progress;
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall =
  | SudoCall_sudo
  | SudoCall_sudo_unchecked_weight
  | SudoCall_set_key
  | SudoCall_sudo_as;

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo {
  __kind: 'sudo';
  call: Call;
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight';
  call: Call;
  weight: Weight;
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_set_key {
  __kind: 'set_key';
  new: MultiAddress;
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 *
 * The dispatch origin for this call must be _Signed_.
 *
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_as {
  __kind: 'sudo_as';
  who: MultiAddress;
  call: Call;
}

export interface EquivocationProof {
  offender: Uint8Array;
  slot: bigint;
  firstHeader: Header;
  secondHeader: Header;
}

export interface MembershipProof {
  session: number;
  trieNodes: Uint8Array[];
  validatorCount: number;
}

export type NextConfigDescriptor = NextConfigDescriptor_V1;

export interface NextConfigDescriptor_V1 {
  __kind: 'V1';
  c: [bigint, bigint];
  allowedSlots: AllowedSlots;
}

export interface SessionKeys {
  grandpa: Uint8Array;
  babe: Uint8Array;
  imOnline: Uint8Array;
  paraValidator: Uint8Array;
  paraAssignment: Uint8Array;
  authorityDiscovery: Uint8Array;
  beefy: Uint8Array;
}

export interface Type_254 {
  setId: bigint;
  equivocation: Equivocation;
}

export interface Heartbeat {
  blockNumber: number;
  networkState: OpaqueNetworkState;
  sessionIndex: number;
  authorityIndex: number;
  validatorsLen: number;
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup;

export interface Bounded_Legacy {
  __kind: 'Legacy';
  hash: Uint8Array;
}

export interface Bounded_Inline {
  __kind: 'Inline';
  value: Uint8Array;
}

export interface Bounded_Lookup {
  __kind: 'Lookup';
  hash: Uint8Array;
  len: number;
}

export type AccountVote = AccountVote_Standard | AccountVote_Split;

export interface AccountVote_Standard {
  __kind: 'Standard';
  vote: number;
  balance: bigint;
}

export interface AccountVote_Split {
  __kind: 'Split';
  aye: bigint;
  nay: bigint;
}

export type Conviction =
  | Conviction_None
  | Conviction_Locked1x
  | Conviction_Locked2x
  | Conviction_Locked3x
  | Conviction_Locked4x
  | Conviction_Locked5x
  | Conviction_Locked6x;

export interface Conviction_None {
  __kind: 'None';
}

export interface Conviction_Locked1x {
  __kind: 'Locked1x';
}

export interface Conviction_Locked2x {
  __kind: 'Locked2x';
}

export interface Conviction_Locked3x {
  __kind: 'Locked3x';
}

export interface Conviction_Locked4x {
  __kind: 'Locked4x';
}

export interface Conviction_Locked5x {
  __kind: 'Locked5x';
}

export interface Conviction_Locked6x {
  __kind: 'Locked6x';
}

export type MetadataOwner =
  | MetadataOwner_External
  | MetadataOwner_Proposal
  | MetadataOwner_Referendum;

export interface MetadataOwner_External {
  __kind: 'External';
}

export interface MetadataOwner_Proposal {
  __kind: 'Proposal';
  value: number;
}

export interface MetadataOwner_Referendum {
  __kind: 'Referendum';
  value: number;
}

export type Renouncing =
  | Renouncing_Member
  | Renouncing_RunnerUp
  | Renouncing_Candidate;

export interface Renouncing_Member {
  __kind: 'Member';
}

export interface Renouncing_RunnerUp {
  __kind: 'RunnerUp';
}

export interface Renouncing_Candidate {
  __kind: 'Candidate';
  value: number;
}

export type StatementKind = StatementKind_Regular | StatementKind_Saft;

export interface StatementKind_Regular {
  __kind: 'Regular';
}

export interface StatementKind_Saft {
  __kind: 'Saft';
}

export type OriginCaller =
  | OriginCaller_system
  | OriginCaller_Council
  | OriginCaller_TechnicalCommittee
  | OriginCaller_ParachainsOrigin
  | OriginCaller_XcmPallet
  | OriginCaller_Void;

export interface OriginCaller_system {
  __kind: 'system';
  value: RawOrigin;
}

export interface OriginCaller_Council {
  __kind: 'Council';
  value: Type_307;
}

export interface OriginCaller_TechnicalCommittee {
  __kind: 'TechnicalCommittee';
  value: Type_308;
}

export interface OriginCaller_ParachainsOrigin {
  __kind: 'ParachainsOrigin';
  value: Origin;
}

export interface OriginCaller_XcmPallet {
  __kind: 'XcmPallet';
  value: Type_310;
}

export interface OriginCaller_Void {
  __kind: 'Void';
  value: Void;
}

export interface IdentityInfo {
  additional: [Data, Data][];
  display: Data;
  legal: Data;
  web: Data;
  riot: Data;
  email: Data;
  pgpFingerprint: Uint8Array | undefined;
  image: Data;
  twitter: Data;
}

export type Data =
  | Data_None
  | Data_Raw0
  | Data_Raw1
  | Data_Raw2
  | Data_Raw3
  | Data_Raw4
  | Data_Raw5
  | Data_Raw6
  | Data_Raw7
  | Data_Raw8
  | Data_Raw9
  | Data_Raw10
  | Data_Raw11
  | Data_Raw12
  | Data_Raw13
  | Data_Raw14
  | Data_Raw15
  | Data_Raw16
  | Data_Raw17
  | Data_Raw18
  | Data_Raw19
  | Data_Raw20
  | Data_Raw21
  | Data_Raw22
  | Data_Raw23
  | Data_Raw24
  | Data_Raw25
  | Data_Raw26
  | Data_Raw27
  | Data_Raw28
  | Data_Raw29
  | Data_Raw30
  | Data_Raw31
  | Data_Raw32
  | Data_BlakeTwo256
  | Data_Sha256
  | Data_Keccak256
  | Data_ShaThree256;

export interface Data_None {
  __kind: 'None';
}

export interface Data_Raw0 {
  __kind: 'Raw0';
  value: Uint8Array;
}

export interface Data_Raw1 {
  __kind: 'Raw1';
  value: Uint8Array;
}

export interface Data_Raw2 {
  __kind: 'Raw2';
  value: Uint8Array;
}

export interface Data_Raw3 {
  __kind: 'Raw3';
  value: Uint8Array;
}

export interface Data_Raw4 {
  __kind: 'Raw4';
  value: Uint8Array;
}

export interface Data_Raw5 {
  __kind: 'Raw5';
  value: Uint8Array;
}

export interface Data_Raw6 {
  __kind: 'Raw6';
  value: Uint8Array;
}

export interface Data_Raw7 {
  __kind: 'Raw7';
  value: Uint8Array;
}

export interface Data_Raw8 {
  __kind: 'Raw8';
  value: Uint8Array;
}

export interface Data_Raw9 {
  __kind: 'Raw9';
  value: Uint8Array;
}

export interface Data_Raw10 {
  __kind: 'Raw10';
  value: Uint8Array;
}

export interface Data_Raw11 {
  __kind: 'Raw11';
  value: Uint8Array;
}

export interface Data_Raw12 {
  __kind: 'Raw12';
  value: Uint8Array;
}

export interface Data_Raw13 {
  __kind: 'Raw13';
  value: Uint8Array;
}

export interface Data_Raw14 {
  __kind: 'Raw14';
  value: Uint8Array;
}

export interface Data_Raw15 {
  __kind: 'Raw15';
  value: Uint8Array;
}

export interface Data_Raw16 {
  __kind: 'Raw16';
  value: Uint8Array;
}

export interface Data_Raw17 {
  __kind: 'Raw17';
  value: Uint8Array;
}

export interface Data_Raw18 {
  __kind: 'Raw18';
  value: Uint8Array;
}

export interface Data_Raw19 {
  __kind: 'Raw19';
  value: Uint8Array;
}

export interface Data_Raw20 {
  __kind: 'Raw20';
  value: Uint8Array;
}

export interface Data_Raw21 {
  __kind: 'Raw21';
  value: Uint8Array;
}

export interface Data_Raw22 {
  __kind: 'Raw22';
  value: Uint8Array;
}

export interface Data_Raw23 {
  __kind: 'Raw23';
  value: Uint8Array;
}

export interface Data_Raw24 {
  __kind: 'Raw24';
  value: Uint8Array;
}

export interface Data_Raw25 {
  __kind: 'Raw25';
  value: Uint8Array;
}

export interface Data_Raw26 {
  __kind: 'Raw26';
  value: Uint8Array;
}

export interface Data_Raw27 {
  __kind: 'Raw27';
  value: Uint8Array;
}

export interface Data_Raw28 {
  __kind: 'Raw28';
  value: Uint8Array;
}

export interface Data_Raw29 {
  __kind: 'Raw29';
  value: Uint8Array;
}

export interface Data_Raw30 {
  __kind: 'Raw30';
  value: Uint8Array;
}

export interface Data_Raw31 {
  __kind: 'Raw31';
  value: Uint8Array;
}

export interface Data_Raw32 {
  __kind: 'Raw32';
  value: Uint8Array;
}

export interface Data_BlakeTwo256 {
  __kind: 'BlakeTwo256';
  value: Uint8Array;
}

export interface Data_Sha256 {
  __kind: 'Sha256';
  value: Uint8Array;
}

export interface Data_Keccak256 {
  __kind: 'Keccak256';
  value: Uint8Array;
}

export interface Data_ShaThree256 {
  __kind: 'ShaThree256';
  value: Uint8Array;
}

export type Judgement =
  | Judgement_Unknown
  | Judgement_FeePaid
  | Judgement_Reasonable
  | Judgement_KnownGood
  | Judgement_OutOfDate
  | Judgement_LowQuality
  | Judgement_Erroneous;

export interface Judgement_Unknown {
  __kind: 'Unknown';
}

export interface Judgement_FeePaid {
  __kind: 'FeePaid';
  value: bigint;
}

export interface Judgement_Reasonable {
  __kind: 'Reasonable';
}

export interface Judgement_KnownGood {
  __kind: 'KnownGood';
}

export interface Judgement_OutOfDate {
  __kind: 'OutOfDate';
}

export interface Judgement_LowQuality {
  __kind: 'LowQuality';
}

export interface Judgement_Erroneous {
  __kind: 'Erroneous';
}

export type Type_353 = Type_353_Rebid | Type_353_Reject | Type_353_Approve;

export interface Type_353_Rebid {
  __kind: 'Rebid';
}

export interface Type_353_Reject {
  __kind: 'Reject';
}

export interface Type_353_Approve {
  __kind: 'Approve';
}

export interface VestingInfo {
  locked: bigint;
  perBlock: bigint;
  startingBlock: number;
}

export interface V2InherentData {
  bitfields: V2UncheckedSigned[];
  backedCandidates: V2BackedCandidate[];
  disputes: V2DisputeStatementSet[];
  parentHeader: Header;
}

export interface V2PvfCheckStatement {
  accept: boolean;
  subject: Uint8Array;
  sessionIndex: number;
  validatorIndex: number;
}

export interface HrmpChannelId {
  sender: number;
  recipient: number;
}

export interface DisputeProof {
  timeSlot: DisputesTimeSlot;
  kind: SlashingOffenceKind;
  validatorIndex: number;
  validatorId: Uint8Array;
}

export type MultiSigner =
  | MultiSigner_Ed25519
  | MultiSigner_Sr25519
  | MultiSigner_Ecdsa;

export interface MultiSigner_Ed25519 {
  __kind: 'Ed25519';
  value: Uint8Array;
}

export interface MultiSigner_Sr25519 {
  __kind: 'Sr25519';
  value: Uint8Array;
}

export interface MultiSigner_Ecdsa {
  __kind: 'Ecdsa';
  value: Uint8Array;
}

export type MultiSignature =
  | MultiSignature_Ed25519
  | MultiSignature_Sr25519
  | MultiSignature_Ecdsa;

export interface MultiSignature_Ed25519 {
  __kind: 'Ed25519';
  value: Uint8Array;
}

export interface MultiSignature_Sr25519 {
  __kind: 'Sr25519';
  value: Uint8Array;
}

export interface MultiSignature_Ecdsa {
  __kind: 'Ecdsa';
  value: Uint8Array;
}

export type VersionedMultiLocation =
  | VersionedMultiLocation_V2
  | VersionedMultiLocation_V3;

export interface VersionedMultiLocation_V2 {
  __kind: 'V2';
  value: V2MultiLocation;
}

export interface VersionedMultiLocation_V3 {
  __kind: 'V3';
  value: V3MultiLocation;
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3;

export interface VersionedXcm_V2 {
  __kind: 'V2';
  value: V2Instruction[];
}

export interface VersionedXcm_V3 {
  __kind: 'V3';
  value: V3Instruction[];
}

export type VersionedMultiAssets =
  | VersionedMultiAssets_V2
  | VersionedMultiAssets_V3;

export interface VersionedMultiAssets_V2 {
  __kind: 'V2';
  value: V2MultiAsset[];
}

export interface VersionedMultiAssets_V3 {
  __kind: 'V3';
  value: V3MultiAsset[];
}

export type Type_435 = Type_435_V2 | Type_435_V3;

export interface Type_435_V2 {
  __kind: 'V2';
  value: Type_438[];
}

export interface Type_435_V3 {
  __kind: 'V3';
  value: Type_442[];
}

export interface V3MultiLocation {
  parents: number;
  interior: V3Junctions;
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited;

export interface V3WeightLimit_Unlimited {
  __kind: 'Unlimited';
}

export interface V3WeightLimit_Limited {
  __kind: 'Limited';
  value: Weight;
}

export interface Type_444 {
  first: VoteMessage;
  second: VoteMessage;
}

export interface ParaGenesisArgs {
  genesisHead: Uint8Array;
  validationCode: Uint8Array;
  paraKind: boolean;
}

export type SlotLeasePeriodStart =
  | SlotLeasePeriodStart_Current
  | SlotLeasePeriodStart_Next;

export interface SlotLeasePeriodStart_Current {
  __kind: 'Current';
}

export interface SlotLeasePeriodStart_Next {
  __kind: 'Next';
}

export interface MigrationLimits {
  size: number;
  item: number;
}

export interface MigrationTask {
  progressTop: Progress;
  progressChild: Progress;
  size: number;
  topItems: number;
  childItems: number;
}

export type Progress = Progress_ToStart | Progress_LastKey | Progress_Complete;

export interface Progress_ToStart {
  __kind: 'ToStart';
}

export interface Progress_LastKey {
  __kind: 'LastKey';
  value: Uint8Array;
}

export interface Progress_Complete {
  __kind: 'Complete';
}

export interface Header {
  parentHash: Uint8Array;
  number: number;
  stateRoot: Uint8Array;
  extrinsicsRoot: Uint8Array;
  digest: Digest;
}

export type AllowedSlots =
  | AllowedSlots_PrimarySlots
  | AllowedSlots_PrimaryAndSecondaryPlainSlots
  | AllowedSlots_PrimaryAndSecondaryVRFSlots;

export interface AllowedSlots_PrimarySlots {
  __kind: 'PrimarySlots';
}

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
  __kind: 'PrimaryAndSecondaryPlainSlots';
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
  __kind: 'PrimaryAndSecondaryVRFSlots';
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit;

export interface Equivocation_Prevote {
  __kind: 'Prevote';
  value: Type_256;
}

export interface Equivocation_Precommit {
  __kind: 'Precommit';
  value: Type_261;
}

export interface OpaqueNetworkState {
  peerId: Uint8Array;
  externalAddresses: Uint8Array[];
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None;

export interface RawOrigin_Root {
  __kind: 'Root';
}

export interface RawOrigin_Signed {
  __kind: 'Signed';
  value: Uint8Array;
}

export interface RawOrigin_None {
  __kind: 'None';
}

export type Type_307 = Type_307_Members | Type_307_Member | Type_307__Phantom;

export interface Type_307_Members {
  __kind: 'Members';
  value: [number, number];
}

export interface Type_307_Member {
  __kind: 'Member';
  value: Uint8Array;
}

export interface Type_307__Phantom {
  __kind: '_Phantom';
}

export type Type_308 = Type_308_Members | Type_308_Member | Type_308__Phantom;

export interface Type_308_Members {
  __kind: 'Members';
  value: [number, number];
}

export interface Type_308_Member {
  __kind: 'Member';
  value: Uint8Array;
}

export interface Type_308__Phantom {
  __kind: '_Phantom';
}

export type Origin = Origin_Parachain;

export interface Origin_Parachain {
  __kind: 'Parachain';
  value: number;
}

export type Type_310 = Type_310_Xcm | Type_310_Response;

export interface Type_310_Xcm {
  __kind: 'Xcm';
  value: V3MultiLocation;
}

export interface Type_310_Response {
  __kind: 'Response';
  value: V3MultiLocation;
}

export type Void = never;

export interface V2UncheckedSigned {
  payload: Uint8Array;
  validatorIndex: number;
  signature: Uint8Array;
}

export interface V2BackedCandidate {
  candidate: V2CommittedCandidateReceipt;
  validityVotes: V2ValidityAttestation[];
  validatorIndices: Uint8Array;
}

export interface V2DisputeStatementSet {
  candidateHash: Uint8Array;
  session: number;
  statements: [V2DisputeStatement, number, Uint8Array][];
}

export interface DisputesTimeSlot {
  sessionIndex: number;
  candidateHash: Uint8Array;
}

export type SlashingOffenceKind =
  | SlashingOffenceKind_ForInvalid
  | SlashingOffenceKind_AgainstValid;

export interface SlashingOffenceKind_ForInvalid {
  __kind: 'ForInvalid';
}

export interface SlashingOffenceKind_AgainstValid {
  __kind: 'AgainstValid';
}

export interface V2MultiLocation {
  parents: number;
  interior: V2Junctions;
}

export type V2Instruction =
  | V2Instruction_WithdrawAsset
  | V2Instruction_ReserveAssetDeposited
  | V2Instruction_ReceiveTeleportedAsset
  | V2Instruction_QueryResponse
  | V2Instruction_TransferAsset
  | V2Instruction_TransferReserveAsset
  | V2Instruction_Transact
  | V2Instruction_HrmpNewChannelOpenRequest
  | V2Instruction_HrmpChannelAccepted
  | V2Instruction_HrmpChannelClosing
  | V2Instruction_ClearOrigin
  | V2Instruction_DescendOrigin
  | V2Instruction_ReportError
  | V2Instruction_DepositAsset
  | V2Instruction_DepositReserveAsset
  | V2Instruction_ExchangeAsset
  | V2Instruction_InitiateReserveWithdraw
  | V2Instruction_InitiateTeleport
  | V2Instruction_QueryHolding
  | V2Instruction_BuyExecution
  | V2Instruction_RefundSurplus
  | V2Instruction_SetErrorHandler
  | V2Instruction_SetAppendix
  | V2Instruction_ClearError
  | V2Instruction_ClaimAsset
  | V2Instruction_Trap
  | V2Instruction_SubscribeVersion
  | V2Instruction_UnsubscribeVersion;

export interface V2Instruction_WithdrawAsset {
  __kind: 'WithdrawAsset';
  value: V2MultiAsset[];
}

export interface V2Instruction_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited';
  value: V2MultiAsset[];
}

export interface V2Instruction_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset';
  value: V2MultiAsset[];
}

export interface V2Instruction_QueryResponse {
  __kind: 'QueryResponse';
  queryId: bigint;
  response: V2Response;
  maxWeight: bigint;
}

export interface V2Instruction_TransferAsset {
  __kind: 'TransferAsset';
  assets: V2MultiAsset[];
  beneficiary: V2MultiLocation;
}

export interface V2Instruction_TransferReserveAsset {
  __kind: 'TransferReserveAsset';
  assets: V2MultiAsset[];
  dest: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface V2Instruction_Transact {
  __kind: 'Transact';
  originType: V2OriginKind;
  requireWeightAtMost: bigint;
  call: DoubleEncoded;
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest';
  sender: number;
  maxMessageSize: number;
  maxCapacity: number;
}

export interface V2Instruction_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted';
  recipient: number;
}

export interface V2Instruction_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing';
  initiator: number;
  sender: number;
  recipient: number;
}

export interface V2Instruction_ClearOrigin {
  __kind: 'ClearOrigin';
}

export interface V2Instruction_DescendOrigin {
  __kind: 'DescendOrigin';
  value: V2Junctions;
}

export interface V2Instruction_ReportError {
  __kind: 'ReportError';
  queryId: bigint;
  dest: V2MultiLocation;
  maxResponseWeight: bigint;
}

export interface V2Instruction_DepositAsset {
  __kind: 'DepositAsset';
  assets: V2MultiAssetFilter;
  maxAssets: number;
  beneficiary: V2MultiLocation;
}

export interface V2Instruction_DepositReserveAsset {
  __kind: 'DepositReserveAsset';
  assets: V2MultiAssetFilter;
  maxAssets: number;
  dest: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface V2Instruction_ExchangeAsset {
  __kind: 'ExchangeAsset';
  give: V2MultiAssetFilter;
  receive: V2MultiAsset[];
}

export interface V2Instruction_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw';
  assets: V2MultiAssetFilter;
  reserve: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface V2Instruction_InitiateTeleport {
  __kind: 'InitiateTeleport';
  assets: V2MultiAssetFilter;
  dest: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface V2Instruction_QueryHolding {
  __kind: 'QueryHolding';
  queryId: bigint;
  dest: V2MultiLocation;
  assets: V2MultiAssetFilter;
  maxResponseWeight: bigint;
}

export interface V2Instruction_BuyExecution {
  __kind: 'BuyExecution';
  fees: V2MultiAsset;
  weightLimit: V2WeightLimit;
}

export interface V2Instruction_RefundSurplus {
  __kind: 'RefundSurplus';
}

export interface V2Instruction_SetErrorHandler {
  __kind: 'SetErrorHandler';
  value: V2Instruction[];
}

export interface V2Instruction_SetAppendix {
  __kind: 'SetAppendix';
  value: V2Instruction[];
}

export interface V2Instruction_ClearError {
  __kind: 'ClearError';
}

export interface V2Instruction_ClaimAsset {
  __kind: 'ClaimAsset';
  assets: V2MultiAsset[];
  ticket: V2MultiLocation;
}

export interface V2Instruction_Trap {
  __kind: 'Trap';
  value: bigint;
}

export interface V2Instruction_SubscribeVersion {
  __kind: 'SubscribeVersion';
  queryId: bigint;
  maxResponseWeight: bigint;
}

export interface V2Instruction_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion';
}

export type V3Instruction =
  | V3Instruction_WithdrawAsset
  | V3Instruction_ReserveAssetDeposited
  | V3Instruction_ReceiveTeleportedAsset
  | V3Instruction_QueryResponse
  | V3Instruction_TransferAsset
  | V3Instruction_TransferReserveAsset
  | V3Instruction_Transact
  | V3Instruction_HrmpNewChannelOpenRequest
  | V3Instruction_HrmpChannelAccepted
  | V3Instruction_HrmpChannelClosing
  | V3Instruction_ClearOrigin
  | V3Instruction_DescendOrigin
  | V3Instruction_ReportError
  | V3Instruction_DepositAsset
  | V3Instruction_DepositReserveAsset
  | V3Instruction_ExchangeAsset
  | V3Instruction_InitiateReserveWithdraw
  | V3Instruction_InitiateTeleport
  | V3Instruction_ReportHolding
  | V3Instruction_BuyExecution
  | V3Instruction_RefundSurplus
  | V3Instruction_SetErrorHandler
  | V3Instruction_SetAppendix
  | V3Instruction_ClearError
  | V3Instruction_ClaimAsset
  | V3Instruction_Trap
  | V3Instruction_SubscribeVersion
  | V3Instruction_UnsubscribeVersion
  | V3Instruction_BurnAsset
  | V3Instruction_ExpectAsset
  | V3Instruction_ExpectOrigin
  | V3Instruction_ExpectError
  | V3Instruction_ExpectTransactStatus
  | V3Instruction_QueryPallet
  | V3Instruction_ExpectPallet
  | V3Instruction_ReportTransactStatus
  | V3Instruction_ClearTransactStatus
  | V3Instruction_UniversalOrigin
  | V3Instruction_ExportMessage
  | V3Instruction_LockAsset
  | V3Instruction_UnlockAsset
  | V3Instruction_NoteUnlockable
  | V3Instruction_RequestUnlock
  | V3Instruction_SetFeesMode
  | V3Instruction_SetTopic
  | V3Instruction_ClearTopic
  | V3Instruction_AliasOrigin
  | V3Instruction_UnpaidExecution;

export interface V3Instruction_WithdrawAsset {
  __kind: 'WithdrawAsset';
  value: V3MultiAsset[];
}

export interface V3Instruction_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited';
  value: V3MultiAsset[];
}

export interface V3Instruction_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset';
  value: V3MultiAsset[];
}

export interface V3Instruction_QueryResponse {
  __kind: 'QueryResponse';
  queryId: bigint;
  response: V3Response;
  maxWeight: Weight;
  querier: V3MultiLocation | undefined;
}

export interface V3Instruction_TransferAsset {
  __kind: 'TransferAsset';
  assets: V3MultiAsset[];
  beneficiary: V3MultiLocation;
}

export interface V3Instruction_TransferReserveAsset {
  __kind: 'TransferReserveAsset';
  assets: V3MultiAsset[];
  dest: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface V3Instruction_Transact {
  __kind: 'Transact';
  originKind: V2OriginKind;
  requireWeightAtMost: Weight;
  call: DoubleEncoded;
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest';
  sender: number;
  maxMessageSize: number;
  maxCapacity: number;
}

export interface V3Instruction_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted';
  recipient: number;
}

export interface V3Instruction_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing';
  initiator: number;
  sender: number;
  recipient: number;
}

export interface V3Instruction_ClearOrigin {
  __kind: 'ClearOrigin';
}

export interface V3Instruction_DescendOrigin {
  __kind: 'DescendOrigin';
  value: V3Junctions;
}

export interface V3Instruction_ReportError {
  __kind: 'ReportError';
  value: V3QueryResponseInfo;
}

export interface V3Instruction_DepositAsset {
  __kind: 'DepositAsset';
  assets: V3MultiAssetFilter;
  beneficiary: V3MultiLocation;
}

export interface V3Instruction_DepositReserveAsset {
  __kind: 'DepositReserveAsset';
  assets: V3MultiAssetFilter;
  dest: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface V3Instruction_ExchangeAsset {
  __kind: 'ExchangeAsset';
  give: V3MultiAssetFilter;
  want: V3MultiAsset[];
  maximal: boolean;
}

export interface V3Instruction_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw';
  assets: V3MultiAssetFilter;
  reserve: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface V3Instruction_InitiateTeleport {
  __kind: 'InitiateTeleport';
  assets: V3MultiAssetFilter;
  dest: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface V3Instruction_ReportHolding {
  __kind: 'ReportHolding';
  responseInfo: V3QueryResponseInfo;
  assets: V3MultiAssetFilter;
}

export interface V3Instruction_BuyExecution {
  __kind: 'BuyExecution';
  fees: V3MultiAsset;
  weightLimit: V3WeightLimit;
}

export interface V3Instruction_RefundSurplus {
  __kind: 'RefundSurplus';
}

export interface V3Instruction_SetErrorHandler {
  __kind: 'SetErrorHandler';
  value: V3Instruction[];
}

export interface V3Instruction_SetAppendix {
  __kind: 'SetAppendix';
  value: V3Instruction[];
}

export interface V3Instruction_ClearError {
  __kind: 'ClearError';
}

export interface V3Instruction_ClaimAsset {
  __kind: 'ClaimAsset';
  assets: V3MultiAsset[];
  ticket: V3MultiLocation;
}

export interface V3Instruction_Trap {
  __kind: 'Trap';
  value: bigint;
}

export interface V3Instruction_SubscribeVersion {
  __kind: 'SubscribeVersion';
  queryId: bigint;
  maxResponseWeight: Weight;
}

export interface V3Instruction_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion';
}

export interface V3Instruction_BurnAsset {
  __kind: 'BurnAsset';
  value: V3MultiAsset[];
}

export interface V3Instruction_ExpectAsset {
  __kind: 'ExpectAsset';
  value: V3MultiAsset[];
}

export interface V3Instruction_ExpectOrigin {
  __kind: 'ExpectOrigin';
  value: V3MultiLocation | undefined;
}

export interface V3Instruction_ExpectError {
  __kind: 'ExpectError';
  value: [number, V3Error] | undefined;
}

export interface V3Instruction_ExpectTransactStatus {
  __kind: 'ExpectTransactStatus';
  value: V3MaybeErrorCode;
}

export interface V3Instruction_QueryPallet {
  __kind: 'QueryPallet';
  moduleName: Uint8Array;
  responseInfo: V3QueryResponseInfo;
}

export interface V3Instruction_ExpectPallet {
  __kind: 'ExpectPallet';
  index: number;
  name: Uint8Array;
  moduleName: Uint8Array;
  crateMajor: number;
  minCrateMinor: number;
}

export interface V3Instruction_ReportTransactStatus {
  __kind: 'ReportTransactStatus';
  value: V3QueryResponseInfo;
}

export interface V3Instruction_ClearTransactStatus {
  __kind: 'ClearTransactStatus';
}

export interface V3Instruction_UniversalOrigin {
  __kind: 'UniversalOrigin';
  value: V3Junction;
}

export interface V3Instruction_ExportMessage {
  __kind: 'ExportMessage';
  network: V3NetworkId;
  destination: V3Junctions;
  xcm: V3Instruction[];
}

export interface V3Instruction_LockAsset {
  __kind: 'LockAsset';
  asset: V3MultiAsset;
  unlocker: V3MultiLocation;
}

export interface V3Instruction_UnlockAsset {
  __kind: 'UnlockAsset';
  asset: V3MultiAsset;
  target: V3MultiLocation;
}

export interface V3Instruction_NoteUnlockable {
  __kind: 'NoteUnlockable';
  asset: V3MultiAsset;
  owner: V3MultiLocation;
}

export interface V3Instruction_RequestUnlock {
  __kind: 'RequestUnlock';
  asset: V3MultiAsset;
  locker: V3MultiLocation;
}

export interface V3Instruction_SetFeesMode {
  __kind: 'SetFeesMode';
  jitWithdraw: boolean;
}

export interface V3Instruction_SetTopic {
  __kind: 'SetTopic';
  value: Uint8Array;
}

export interface V3Instruction_ClearTopic {
  __kind: 'ClearTopic';
}

export interface V3Instruction_AliasOrigin {
  __kind: 'AliasOrigin';
  value: V3MultiLocation;
}

export interface V3Instruction_UnpaidExecution {
  __kind: 'UnpaidExecution';
  weightLimit: V3WeightLimit;
  checkOrigin: V3MultiLocation | undefined;
}

export interface V2MultiAsset {
  id: V2AssetId;
  fun: V2Fungibility;
}

export interface V3MultiAsset {
  id: V3AssetId;
  fun: V3Fungibility;
}

export type Type_438 =
  | Type_438_WithdrawAsset
  | Type_438_ReserveAssetDeposited
  | Type_438_ReceiveTeleportedAsset
  | Type_438_QueryResponse
  | Type_438_TransferAsset
  | Type_438_TransferReserveAsset
  | Type_438_Transact
  | Type_438_HrmpNewChannelOpenRequest
  | Type_438_HrmpChannelAccepted
  | Type_438_HrmpChannelClosing
  | Type_438_ClearOrigin
  | Type_438_DescendOrigin
  | Type_438_ReportError
  | Type_438_DepositAsset
  | Type_438_DepositReserveAsset
  | Type_438_ExchangeAsset
  | Type_438_InitiateReserveWithdraw
  | Type_438_InitiateTeleport
  | Type_438_QueryHolding
  | Type_438_BuyExecution
  | Type_438_RefundSurplus
  | Type_438_SetErrorHandler
  | Type_438_SetAppendix
  | Type_438_ClearError
  | Type_438_ClaimAsset
  | Type_438_Trap
  | Type_438_SubscribeVersion
  | Type_438_UnsubscribeVersion;

export interface Type_438_WithdrawAsset {
  __kind: 'WithdrawAsset';
  value: V2MultiAsset[];
}

export interface Type_438_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited';
  value: V2MultiAsset[];
}

export interface Type_438_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset';
  value: V2MultiAsset[];
}

export interface Type_438_QueryResponse {
  __kind: 'QueryResponse';
  queryId: bigint;
  response: V2Response;
  maxWeight: bigint;
}

export interface Type_438_TransferAsset {
  __kind: 'TransferAsset';
  assets: V2MultiAsset[];
  beneficiary: V2MultiLocation;
}

export interface Type_438_TransferReserveAsset {
  __kind: 'TransferReserveAsset';
  assets: V2MultiAsset[];
  dest: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface Type_438_Transact {
  __kind: 'Transact';
  originType: V2OriginKind;
  requireWeightAtMost: bigint;
  call: DoubleEncoded;
}

export interface Type_438_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest';
  sender: number;
  maxMessageSize: number;
  maxCapacity: number;
}

export interface Type_438_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted';
  recipient: number;
}

export interface Type_438_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing';
  initiator: number;
  sender: number;
  recipient: number;
}

export interface Type_438_ClearOrigin {
  __kind: 'ClearOrigin';
}

export interface Type_438_DescendOrigin {
  __kind: 'DescendOrigin';
  value: V2Junctions;
}

export interface Type_438_ReportError {
  __kind: 'ReportError';
  queryId: bigint;
  dest: V2MultiLocation;
  maxResponseWeight: bigint;
}

export interface Type_438_DepositAsset {
  __kind: 'DepositAsset';
  assets: V2MultiAssetFilter;
  maxAssets: number;
  beneficiary: V2MultiLocation;
}

export interface Type_438_DepositReserveAsset {
  __kind: 'DepositReserveAsset';
  assets: V2MultiAssetFilter;
  maxAssets: number;
  dest: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface Type_438_ExchangeAsset {
  __kind: 'ExchangeAsset';
  give: V2MultiAssetFilter;
  receive: V2MultiAsset[];
}

export interface Type_438_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw';
  assets: V2MultiAssetFilter;
  reserve: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface Type_438_InitiateTeleport {
  __kind: 'InitiateTeleport';
  assets: V2MultiAssetFilter;
  dest: V2MultiLocation;
  xcm: V2Instruction[];
}

export interface Type_438_QueryHolding {
  __kind: 'QueryHolding';
  queryId: bigint;
  dest: V2MultiLocation;
  assets: V2MultiAssetFilter;
  maxResponseWeight: bigint;
}

export interface Type_438_BuyExecution {
  __kind: 'BuyExecution';
  fees: V2MultiAsset;
  weightLimit: V2WeightLimit;
}

export interface Type_438_RefundSurplus {
  __kind: 'RefundSurplus';
}

export interface Type_438_SetErrorHandler {
  __kind: 'SetErrorHandler';
  value: Type_438[];
}

export interface Type_438_SetAppendix {
  __kind: 'SetAppendix';
  value: Type_438[];
}

export interface Type_438_ClearError {
  __kind: 'ClearError';
}

export interface Type_438_ClaimAsset {
  __kind: 'ClaimAsset';
  assets: V2MultiAsset[];
  ticket: V2MultiLocation;
}

export interface Type_438_Trap {
  __kind: 'Trap';
  value: bigint;
}

export interface Type_438_SubscribeVersion {
  __kind: 'SubscribeVersion';
  queryId: bigint;
  maxResponseWeight: bigint;
}

export interface Type_438_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion';
}

export type Type_442 =
  | Type_442_WithdrawAsset
  | Type_442_ReserveAssetDeposited
  | Type_442_ReceiveTeleportedAsset
  | Type_442_QueryResponse
  | Type_442_TransferAsset
  | Type_442_TransferReserveAsset
  | Type_442_Transact
  | Type_442_HrmpNewChannelOpenRequest
  | Type_442_HrmpChannelAccepted
  | Type_442_HrmpChannelClosing
  | Type_442_ClearOrigin
  | Type_442_DescendOrigin
  | Type_442_ReportError
  | Type_442_DepositAsset
  | Type_442_DepositReserveAsset
  | Type_442_ExchangeAsset
  | Type_442_InitiateReserveWithdraw
  | Type_442_InitiateTeleport
  | Type_442_ReportHolding
  | Type_442_BuyExecution
  | Type_442_RefundSurplus
  | Type_442_SetErrorHandler
  | Type_442_SetAppendix
  | Type_442_ClearError
  | Type_442_ClaimAsset
  | Type_442_Trap
  | Type_442_SubscribeVersion
  | Type_442_UnsubscribeVersion
  | Type_442_BurnAsset
  | Type_442_ExpectAsset
  | Type_442_ExpectOrigin
  | Type_442_ExpectError
  | Type_442_ExpectTransactStatus
  | Type_442_QueryPallet
  | Type_442_ExpectPallet
  | Type_442_ReportTransactStatus
  | Type_442_ClearTransactStatus
  | Type_442_UniversalOrigin
  | Type_442_ExportMessage
  | Type_442_LockAsset
  | Type_442_UnlockAsset
  | Type_442_NoteUnlockable
  | Type_442_RequestUnlock
  | Type_442_SetFeesMode
  | Type_442_SetTopic
  | Type_442_ClearTopic
  | Type_442_AliasOrigin
  | Type_442_UnpaidExecution;

export interface Type_442_WithdrawAsset {
  __kind: 'WithdrawAsset';
  value: V3MultiAsset[];
}

export interface Type_442_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited';
  value: V3MultiAsset[];
}

export interface Type_442_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset';
  value: V3MultiAsset[];
}

export interface Type_442_QueryResponse {
  __kind: 'QueryResponse';
  queryId: bigint;
  response: V3Response;
  maxWeight: Weight;
  querier: V3MultiLocation | undefined;
}

export interface Type_442_TransferAsset {
  __kind: 'TransferAsset';
  assets: V3MultiAsset[];
  beneficiary: V3MultiLocation;
}

export interface Type_442_TransferReserveAsset {
  __kind: 'TransferReserveAsset';
  assets: V3MultiAsset[];
  dest: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface Type_442_Transact {
  __kind: 'Transact';
  originKind: V2OriginKind;
  requireWeightAtMost: Weight;
  call: DoubleEncoded;
}

export interface Type_442_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest';
  sender: number;
  maxMessageSize: number;
  maxCapacity: number;
}

export interface Type_442_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted';
  recipient: number;
}

export interface Type_442_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing';
  initiator: number;
  sender: number;
  recipient: number;
}

export interface Type_442_ClearOrigin {
  __kind: 'ClearOrigin';
}

export interface Type_442_DescendOrigin {
  __kind: 'DescendOrigin';
  value: V3Junctions;
}

export interface Type_442_ReportError {
  __kind: 'ReportError';
  value: V3QueryResponseInfo;
}

export interface Type_442_DepositAsset {
  __kind: 'DepositAsset';
  assets: V3MultiAssetFilter;
  beneficiary: V3MultiLocation;
}

export interface Type_442_DepositReserveAsset {
  __kind: 'DepositReserveAsset';
  assets: V3MultiAssetFilter;
  dest: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface Type_442_ExchangeAsset {
  __kind: 'ExchangeAsset';
  give: V3MultiAssetFilter;
  want: V3MultiAsset[];
  maximal: boolean;
}

export interface Type_442_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw';
  assets: V3MultiAssetFilter;
  reserve: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface Type_442_InitiateTeleport {
  __kind: 'InitiateTeleport';
  assets: V3MultiAssetFilter;
  dest: V3MultiLocation;
  xcm: V3Instruction[];
}

export interface Type_442_ReportHolding {
  __kind: 'ReportHolding';
  responseInfo: V3QueryResponseInfo;
  assets: V3MultiAssetFilter;
}

export interface Type_442_BuyExecution {
  __kind: 'BuyExecution';
  fees: V3MultiAsset;
  weightLimit: V3WeightLimit;
}

export interface Type_442_RefundSurplus {
  __kind: 'RefundSurplus';
}

export interface Type_442_SetErrorHandler {
  __kind: 'SetErrorHandler';
  value: Type_442[];
}

export interface Type_442_SetAppendix {
  __kind: 'SetAppendix';
  value: Type_442[];
}

export interface Type_442_ClearError {
  __kind: 'ClearError';
}

export interface Type_442_ClaimAsset {
  __kind: 'ClaimAsset';
  assets: V3MultiAsset[];
  ticket: V3MultiLocation;
}

export interface Type_442_Trap {
  __kind: 'Trap';
  value: bigint;
}

export interface Type_442_SubscribeVersion {
  __kind: 'SubscribeVersion';
  queryId: bigint;
  maxResponseWeight: Weight;
}

export interface Type_442_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion';
}

export interface Type_442_BurnAsset {
  __kind: 'BurnAsset';
  value: V3MultiAsset[];
}

export interface Type_442_ExpectAsset {
  __kind: 'ExpectAsset';
  value: V3MultiAsset[];
}

export interface Type_442_ExpectOrigin {
  __kind: 'ExpectOrigin';
  value: V3MultiLocation | undefined;
}

export interface Type_442_ExpectError {
  __kind: 'ExpectError';
  value: [number, V3Error] | undefined;
}

export interface Type_442_ExpectTransactStatus {
  __kind: 'ExpectTransactStatus';
  value: V3MaybeErrorCode;
}

export interface Type_442_QueryPallet {
  __kind: 'QueryPallet';
  moduleName: Uint8Array;
  responseInfo: V3QueryResponseInfo;
}

export interface Type_442_ExpectPallet {
  __kind: 'ExpectPallet';
  index: number;
  name: Uint8Array;
  moduleName: Uint8Array;
  crateMajor: number;
  minCrateMinor: number;
}

export interface Type_442_ReportTransactStatus {
  __kind: 'ReportTransactStatus';
  value: V3QueryResponseInfo;
}

export interface Type_442_ClearTransactStatus {
  __kind: 'ClearTransactStatus';
}

export interface Type_442_UniversalOrigin {
  __kind: 'UniversalOrigin';
  value: V3Junction;
}

export interface Type_442_ExportMessage {
  __kind: 'ExportMessage';
  network: V3NetworkId;
  destination: V3Junctions;
  xcm: V3Instruction[];
}

export interface Type_442_LockAsset {
  __kind: 'LockAsset';
  asset: V3MultiAsset;
  unlocker: V3MultiLocation;
}

export interface Type_442_UnlockAsset {
  __kind: 'UnlockAsset';
  asset: V3MultiAsset;
  target: V3MultiLocation;
}

export interface Type_442_NoteUnlockable {
  __kind: 'NoteUnlockable';
  asset: V3MultiAsset;
  owner: V3MultiLocation;
}

export interface Type_442_RequestUnlock {
  __kind: 'RequestUnlock';
  asset: V3MultiAsset;
  locker: V3MultiLocation;
}

export interface Type_442_SetFeesMode {
  __kind: 'SetFeesMode';
  jitWithdraw: boolean;
}

export interface Type_442_SetTopic {
  __kind: 'SetTopic';
  value: Uint8Array;
}

export interface Type_442_ClearTopic {
  __kind: 'ClearTopic';
}

export interface Type_442_AliasOrigin {
  __kind: 'AliasOrigin';
  value: V3MultiLocation;
}

export interface Type_442_UnpaidExecution {
  __kind: 'UnpaidExecution';
  weightLimit: V3WeightLimit;
  checkOrigin: V3MultiLocation | undefined;
}

export type V3Junctions =
  | V3Junctions_Here
  | V3Junctions_X1
  | V3Junctions_X2
  | V3Junctions_X3
  | V3Junctions_X4
  | V3Junctions_X5
  | V3Junctions_X6
  | V3Junctions_X7
  | V3Junctions_X8;

export interface V3Junctions_Here {
  __kind: 'Here';
}

export interface V3Junctions_X1 {
  __kind: 'X1';
  value: V3Junction;
}

export interface V3Junctions_X2 {
  __kind: 'X2';
  value: [V3Junction, V3Junction];
}

export interface V3Junctions_X3 {
  __kind: 'X3';
  value: [V3Junction, V3Junction, V3Junction];
}

export interface V3Junctions_X4 {
  __kind: 'X4';
  value: [V3Junction, V3Junction, V3Junction, V3Junction];
}

export interface V3Junctions_X5 {
  __kind: 'X5';
  value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction];
}

export interface V3Junctions_X6 {
  __kind: 'X6';
  value: [
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction
  ];
}

export interface V3Junctions_X7 {
  __kind: 'X7';
  value: [
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction
  ];
}

export interface V3Junctions_X8 {
  __kind: 'X8';
  value: [
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction,
    V3Junction
  ];
}

export interface VoteMessage {
  commitment: Commitment;
  id: Uint8Array;
  signature: Uint8Array;
}

export interface Digest {
  logs: DigestItem[];
}

export interface Type_256 {
  roundNumber: bigint;
  identity: Uint8Array;
  first: [Prevote, Uint8Array];
  second: [Prevote, Uint8Array];
}

export interface Type_261 {
  roundNumber: bigint;
  identity: Uint8Array;
  first: [Precommit, Uint8Array];
  second: [Precommit, Uint8Array];
}

export interface V2CommittedCandidateReceipt {
  descriptor: V2CandidateDescriptor;
  commitments: V2CandidateCommitments;
}

export type V2ValidityAttestation =
  | V2ValidityAttestation_Implicit
  | V2ValidityAttestation_Explicit;

export interface V2ValidityAttestation_Implicit {
  __kind: 'Implicit';
  value: Uint8Array;
}

export interface V2ValidityAttestation_Explicit {
  __kind: 'Explicit';
  value: Uint8Array;
}

export type V2DisputeStatement =
  | V2DisputeStatement_Valid
  | V2DisputeStatement_Invalid;

export interface V2DisputeStatement_Valid {
  __kind: 'Valid';
  value: V2ValidDisputeStatementKind;
}

export interface V2DisputeStatement_Invalid {
  __kind: 'Invalid';
  value: V2InvalidDisputeStatementKind;
}

export type V2Junctions =
  | V2Junctions_Here
  | V2Junctions_X1
  | V2Junctions_X2
  | V2Junctions_X3
  | V2Junctions_X4
  | V2Junctions_X5
  | V2Junctions_X6
  | V2Junctions_X7
  | V2Junctions_X8;

export interface V2Junctions_Here {
  __kind: 'Here';
}

export interface V2Junctions_X1 {
  __kind: 'X1';
  value: V2Junction;
}

export interface V2Junctions_X2 {
  __kind: 'X2';
  value: [V2Junction, V2Junction];
}

export interface V2Junctions_X3 {
  __kind: 'X3';
  value: [V2Junction, V2Junction, V2Junction];
}

export interface V2Junctions_X4 {
  __kind: 'X4';
  value: [V2Junction, V2Junction, V2Junction, V2Junction];
}

export interface V2Junctions_X5 {
  __kind: 'X5';
  value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction];
}

export interface V2Junctions_X6 {
  __kind: 'X6';
  value: [
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction
  ];
}

export interface V2Junctions_X7 {
  __kind: 'X7';
  value: [
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction
  ];
}

export interface V2Junctions_X8 {
  __kind: 'X8';
  value: [
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction,
    V2Junction
  ];
}

export type V2Response =
  | V2Response_Null
  | V2Response_Assets
  | V2Response_ExecutionResult
  | V2Response_Version;

export interface V2Response_Null {
  __kind: 'Null';
}

export interface V2Response_Assets {
  __kind: 'Assets';
  value: V2MultiAsset[];
}

export interface V2Response_ExecutionResult {
  __kind: 'ExecutionResult';
  value: [number, V2Error] | undefined;
}

export interface V2Response_Version {
  __kind: 'Version';
  value: number;
}

export type V2OriginKind =
  | V2OriginKind_Native
  | V2OriginKind_SovereignAccount
  | V2OriginKind_Superuser
  | V2OriginKind_Xcm;

export interface V2OriginKind_Native {
  __kind: 'Native';
}

export interface V2OriginKind_SovereignAccount {
  __kind: 'SovereignAccount';
}

export interface V2OriginKind_Superuser {
  __kind: 'Superuser';
}

export interface V2OriginKind_Xcm {
  __kind: 'Xcm';
}

export interface DoubleEncoded {
  encoded: Uint8Array;
}

export type V2MultiAssetFilter =
  | V2MultiAssetFilter_Definite
  | V2MultiAssetFilter_Wild;

export interface V2MultiAssetFilter_Definite {
  __kind: 'Definite';
  value: V2MultiAsset[];
}

export interface V2MultiAssetFilter_Wild {
  __kind: 'Wild';
  value: V2WildMultiAsset;
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited;

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited';
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited';
  value: bigint;
}

export type V3Response =
  | V3Response_Null
  | V3Response_Assets
  | V3Response_ExecutionResult
  | V3Response_Version
  | V3Response_PalletsInfo
  | V3Response_DispatchResult;

export interface V3Response_Null {
  __kind: 'Null';
}

export interface V3Response_Assets {
  __kind: 'Assets';
  value: V3MultiAsset[];
}

export interface V3Response_ExecutionResult {
  __kind: 'ExecutionResult';
  value: [number, V3Error] | undefined;
}

export interface V3Response_Version {
  __kind: 'Version';
  value: number;
}

export interface V3Response_PalletsInfo {
  __kind: 'PalletsInfo';
  value: V3PalletInfo[];
}

export interface V3Response_DispatchResult {
  __kind: 'DispatchResult';
  value: V3MaybeErrorCode;
}

export interface V3QueryResponseInfo {
  destination: V3MultiLocation;
  queryId: bigint;
  maxWeight: Weight;
}

export type V3MultiAssetFilter =
  | V3MultiAssetFilter_Definite
  | V3MultiAssetFilter_Wild;

export interface V3MultiAssetFilter_Definite {
  __kind: 'Definite';
  value: V3MultiAsset[];
}

export interface V3MultiAssetFilter_Wild {
  __kind: 'Wild';
  value: V3WildMultiAsset;
}

export type V3Error =
  | V3Error_Overflow
  | V3Error_Unimplemented
  | V3Error_UntrustedReserveLocation
  | V3Error_UntrustedTeleportLocation
  | V3Error_LocationFull
  | V3Error_LocationNotInvertible
  | V3Error_BadOrigin
  | V3Error_InvalidLocation
  | V3Error_AssetNotFound
  | V3Error_FailedToTransactAsset
  | V3Error_NotWithdrawable
  | V3Error_LocationCannotHold
  | V3Error_ExceedsMaxMessageSize
  | V3Error_DestinationUnsupported
  | V3Error_Transport
  | V3Error_Unroutable
  | V3Error_UnknownClaim
  | V3Error_FailedToDecode
  | V3Error_MaxWeightInvalid
  | V3Error_NotHoldingFees
  | V3Error_TooExpensive
  | V3Error_Trap
  | V3Error_ExpectationFalse
  | V3Error_PalletNotFound
  | V3Error_NameMismatch
  | V3Error_VersionIncompatible
  | V3Error_HoldingWouldOverflow
  | V3Error_ExportError
  | V3Error_ReanchorFailed
  | V3Error_NoDeal
  | V3Error_FeesNotMet
  | V3Error_LockError
  | V3Error_NoPermission
  | V3Error_Unanchored
  | V3Error_NotDepositable
  | V3Error_UnhandledXcmVersion
  | V3Error_WeightLimitReached
  | V3Error_Barrier
  | V3Error_WeightNotComputable
  | V3Error_ExceedsStackLimit;

export interface V3Error_Overflow {
  __kind: 'Overflow';
}

export interface V3Error_Unimplemented {
  __kind: 'Unimplemented';
}

export interface V3Error_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation';
}

export interface V3Error_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation';
}

export interface V3Error_LocationFull {
  __kind: 'LocationFull';
}

export interface V3Error_LocationNotInvertible {
  __kind: 'LocationNotInvertible';
}

export interface V3Error_BadOrigin {
  __kind: 'BadOrigin';
}

export interface V3Error_InvalidLocation {
  __kind: 'InvalidLocation';
}

export interface V3Error_AssetNotFound {
  __kind: 'AssetNotFound';
}

export interface V3Error_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset';
}

export interface V3Error_NotWithdrawable {
  __kind: 'NotWithdrawable';
}

export interface V3Error_LocationCannotHold {
  __kind: 'LocationCannotHold';
}

export interface V3Error_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize';
}

export interface V3Error_DestinationUnsupported {
  __kind: 'DestinationUnsupported';
}

export interface V3Error_Transport {
  __kind: 'Transport';
}

export interface V3Error_Unroutable {
  __kind: 'Unroutable';
}

export interface V3Error_UnknownClaim {
  __kind: 'UnknownClaim';
}

export interface V3Error_FailedToDecode {
  __kind: 'FailedToDecode';
}

export interface V3Error_MaxWeightInvalid {
  __kind: 'MaxWeightInvalid';
}

export interface V3Error_NotHoldingFees {
  __kind: 'NotHoldingFees';
}

export interface V3Error_TooExpensive {
  __kind: 'TooExpensive';
}

export interface V3Error_Trap {
  __kind: 'Trap';
  value: bigint;
}

export interface V3Error_ExpectationFalse {
  __kind: 'ExpectationFalse';
}

export interface V3Error_PalletNotFound {
  __kind: 'PalletNotFound';
}

export interface V3Error_NameMismatch {
  __kind: 'NameMismatch';
}

export interface V3Error_VersionIncompatible {
  __kind: 'VersionIncompatible';
}

export interface V3Error_HoldingWouldOverflow {
  __kind: 'HoldingWouldOverflow';
}

export interface V3Error_ExportError {
  __kind: 'ExportError';
}

export interface V3Error_ReanchorFailed {
  __kind: 'ReanchorFailed';
}

export interface V3Error_NoDeal {
  __kind: 'NoDeal';
}

export interface V3Error_FeesNotMet {
  __kind: 'FeesNotMet';
}

export interface V3Error_LockError {
  __kind: 'LockError';
}

export interface V3Error_NoPermission {
  __kind: 'NoPermission';
}

export interface V3Error_Unanchored {
  __kind: 'Unanchored';
}

export interface V3Error_NotDepositable {
  __kind: 'NotDepositable';
}

export interface V3Error_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion';
}

export interface V3Error_WeightLimitReached {
  __kind: 'WeightLimitReached';
  value: Weight;
}

export interface V3Error_Barrier {
  __kind: 'Barrier';
}

export interface V3Error_WeightNotComputable {
  __kind: 'WeightNotComputable';
}

export interface V3Error_ExceedsStackLimit {
  __kind: 'ExceedsStackLimit';
}

export type V3MaybeErrorCode =
  | V3MaybeErrorCode_Success
  | V3MaybeErrorCode_Error
  | V3MaybeErrorCode_TruncatedError;

export interface V3MaybeErrorCode_Success {
  __kind: 'Success';
}

export interface V3MaybeErrorCode_Error {
  __kind: 'Error';
  value: Uint8Array;
}

export interface V3MaybeErrorCode_TruncatedError {
  __kind: 'TruncatedError';
  value: Uint8Array;
}

export type V3Junction =
  | V3Junction_Parachain
  | V3Junction_AccountId32
  | V3Junction_AccountIndex64
  | V3Junction_AccountKey20
  | V3Junction_PalletInstance
  | V3Junction_GeneralIndex
  | V3Junction_GeneralKey
  | V3Junction_OnlyChild
  | V3Junction_Plurality
  | V3Junction_GlobalConsensus;

export interface V3Junction_Parachain {
  __kind: 'Parachain';
  value: number;
}

export interface V3Junction_AccountId32 {
  __kind: 'AccountId32';
  network: V3NetworkId | undefined;
  id: Uint8Array;
}

export interface V3Junction_AccountIndex64 {
  __kind: 'AccountIndex64';
  network: V3NetworkId | undefined;
  index: bigint;
}

export interface V3Junction_AccountKey20 {
  __kind: 'AccountKey20';
  network: V3NetworkId | undefined;
  key: Uint8Array;
}

export interface V3Junction_PalletInstance {
  __kind: 'PalletInstance';
  value: number;
}

export interface V3Junction_GeneralIndex {
  __kind: 'GeneralIndex';
  value: bigint;
}

export interface V3Junction_GeneralKey {
  __kind: 'GeneralKey';
  length: number;
  data: Uint8Array;
}

export interface V3Junction_OnlyChild {
  __kind: 'OnlyChild';
}

export interface V3Junction_Plurality {
  __kind: 'Plurality';
  id: V3BodyId;
  part: V3BodyPart;
}

export interface V3Junction_GlobalConsensus {
  __kind: 'GlobalConsensus';
  value: V3NetworkId;
}

export type V3NetworkId =
  | V3NetworkId_ByGenesis
  | V3NetworkId_ByFork
  | V3NetworkId_Polkadot
  | V3NetworkId_Kusama
  | V3NetworkId_Westend
  | V3NetworkId_Rococo
  | V3NetworkId_Wococo
  | V3NetworkId_Ethereum
  | V3NetworkId_BitcoinCore
  | V3NetworkId_BitcoinCash;

export interface V3NetworkId_ByGenesis {
  __kind: 'ByGenesis';
  value: Uint8Array;
}

export interface V3NetworkId_ByFork {
  __kind: 'ByFork';
  blockNumber: bigint;
  blockHash: Uint8Array;
}

export interface V3NetworkId_Polkadot {
  __kind: 'Polkadot';
}

export interface V3NetworkId_Kusama {
  __kind: 'Kusama';
}

export interface V3NetworkId_Westend {
  __kind: 'Westend';
}

export interface V3NetworkId_Rococo {
  __kind: 'Rococo';
}

export interface V3NetworkId_Wococo {
  __kind: 'Wococo';
}

export interface V3NetworkId_Ethereum {
  __kind: 'Ethereum';
  chainId: bigint;
}

export interface V3NetworkId_BitcoinCore {
  __kind: 'BitcoinCore';
}

export interface V3NetworkId_BitcoinCash {
  __kind: 'BitcoinCash';
}

export type V2AssetId = V2AssetId_Concrete | V2AssetId_Abstract;

export interface V2AssetId_Concrete {
  __kind: 'Concrete';
  value: V2MultiLocation;
}

export interface V2AssetId_Abstract {
  __kind: 'Abstract';
  value: Uint8Array;
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible;

export interface V2Fungibility_Fungible {
  __kind: 'Fungible';
  value: bigint;
}

export interface V2Fungibility_NonFungible {
  __kind: 'NonFungible';
  value: V2AssetInstance;
}

export type V3AssetId = V3AssetId_Concrete | V3AssetId_Abstract;

export interface V3AssetId_Concrete {
  __kind: 'Concrete';
  value: V3MultiLocation;
}

export interface V3AssetId_Abstract {
  __kind: 'Abstract';
  value: Uint8Array;
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible;

export interface V3Fungibility_Fungible {
  __kind: 'Fungible';
  value: bigint;
}

export interface V3Fungibility_NonFungible {
  __kind: 'NonFungible';
  value: V3AssetInstance;
}

export interface Commitment {
  payload: [Uint8Array, Uint8Array][];
  blockNumber: number;
  validatorSetId: bigint;
}

export type DigestItem =
  | DigestItem_PreRuntime
  | DigestItem_Consensus
  | DigestItem_Seal
  | DigestItem_Other
  | DigestItem_RuntimeEnvironmentUpdated;

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime';
  value: [Uint8Array, Uint8Array];
}

export interface DigestItem_Consensus {
  __kind: 'Consensus';
  value: [Uint8Array, Uint8Array];
}

export interface DigestItem_Seal {
  __kind: 'Seal';
  value: [Uint8Array, Uint8Array];
}

export interface DigestItem_Other {
  __kind: 'Other';
  value: Uint8Array;
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated';
}

export interface Prevote {
  targetHash: Uint8Array;
  targetNumber: number;
}

export interface Precommit {
  targetHash: Uint8Array;
  targetNumber: number;
}

export interface V2CandidateDescriptor {
  paraId: number;
  relayParent: Uint8Array;
  collator: Uint8Array;
  persistedValidationDataHash: Uint8Array;
  povHash: Uint8Array;
  erasureRoot: Uint8Array;
  signature: Uint8Array;
  paraHead: Uint8Array;
  validationCodeHash: Uint8Array;
}

export interface V2CandidateCommitments {
  upwardMessages: Uint8Array[];
  horizontalMessages: OutboundHrmpMessage[];
  newValidationCode: Uint8Array | undefined;
  headData: Uint8Array;
  processedDownwardMessages: number;
  hrmpWatermark: number;
}

export type V2ValidDisputeStatementKind =
  | V2ValidDisputeStatementKind_Explicit
  | V2ValidDisputeStatementKind_BackingSeconded
  | V2ValidDisputeStatementKind_BackingValid
  | V2ValidDisputeStatementKind_ApprovalChecking;

export interface V2ValidDisputeStatementKind_Explicit {
  __kind: 'Explicit';
}

export interface V2ValidDisputeStatementKind_BackingSeconded {
  __kind: 'BackingSeconded';
  value: Uint8Array;
}

export interface V2ValidDisputeStatementKind_BackingValid {
  __kind: 'BackingValid';
  value: Uint8Array;
}

export interface V2ValidDisputeStatementKind_ApprovalChecking {
  __kind: 'ApprovalChecking';
}

export type V2InvalidDisputeStatementKind =
  V2InvalidDisputeStatementKind_Explicit;

export interface V2InvalidDisputeStatementKind_Explicit {
  __kind: 'Explicit';
}

export type V2Junction =
  | V2Junction_Parachain
  | V2Junction_AccountId32
  | V2Junction_AccountIndex64
  | V2Junction_AccountKey20
  | V2Junction_PalletInstance
  | V2Junction_GeneralIndex
  | V2Junction_GeneralKey
  | V2Junction_OnlyChild
  | V2Junction_Plurality;

export interface V2Junction_Parachain {
  __kind: 'Parachain';
  value: number;
}

export interface V2Junction_AccountId32 {
  __kind: 'AccountId32';
  network: V2NetworkId;
  id: Uint8Array;
}

export interface V2Junction_AccountIndex64 {
  __kind: 'AccountIndex64';
  network: V2NetworkId;
  index: bigint;
}

export interface V2Junction_AccountKey20 {
  __kind: 'AccountKey20';
  network: V2NetworkId;
  key: Uint8Array;
}

export interface V2Junction_PalletInstance {
  __kind: 'PalletInstance';
  value: number;
}

export interface V2Junction_GeneralIndex {
  __kind: 'GeneralIndex';
  value: bigint;
}

export interface V2Junction_GeneralKey {
  __kind: 'GeneralKey';
  value: Uint8Array;
}

export interface V2Junction_OnlyChild {
  __kind: 'OnlyChild';
}

export interface V2Junction_Plurality {
  __kind: 'Plurality';
  id: V2BodyId;
  part: V2BodyPart;
}

export type V2Error =
  | V2Error_Overflow
  | V2Error_Unimplemented
  | V2Error_UntrustedReserveLocation
  | V2Error_UntrustedTeleportLocation
  | V2Error_MultiLocationFull
  | V2Error_MultiLocationNotInvertible
  | V2Error_BadOrigin
  | V2Error_InvalidLocation
  | V2Error_AssetNotFound
  | V2Error_FailedToTransactAsset
  | V2Error_NotWithdrawable
  | V2Error_LocationCannotHold
  | V2Error_ExceedsMaxMessageSize
  | V2Error_DestinationUnsupported
  | V2Error_Transport
  | V2Error_Unroutable
  | V2Error_UnknownClaim
  | V2Error_FailedToDecode
  | V2Error_MaxWeightInvalid
  | V2Error_NotHoldingFees
  | V2Error_TooExpensive
  | V2Error_Trap
  | V2Error_UnhandledXcmVersion
  | V2Error_WeightLimitReached
  | V2Error_Barrier
  | V2Error_WeightNotComputable;

export interface V2Error_Overflow {
  __kind: 'Overflow';
}

export interface V2Error_Unimplemented {
  __kind: 'Unimplemented';
}

export interface V2Error_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation';
}

export interface V2Error_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation';
}

export interface V2Error_MultiLocationFull {
  __kind: 'MultiLocationFull';
}

export interface V2Error_MultiLocationNotInvertible {
  __kind: 'MultiLocationNotInvertible';
}

export interface V2Error_BadOrigin {
  __kind: 'BadOrigin';
}

export interface V2Error_InvalidLocation {
  __kind: 'InvalidLocation';
}

export interface V2Error_AssetNotFound {
  __kind: 'AssetNotFound';
}

export interface V2Error_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset';
}

export interface V2Error_NotWithdrawable {
  __kind: 'NotWithdrawable';
}

export interface V2Error_LocationCannotHold {
  __kind: 'LocationCannotHold';
}

export interface V2Error_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize';
}

export interface V2Error_DestinationUnsupported {
  __kind: 'DestinationUnsupported';
}

export interface V2Error_Transport {
  __kind: 'Transport';
}

export interface V2Error_Unroutable {
  __kind: 'Unroutable';
}

export interface V2Error_UnknownClaim {
  __kind: 'UnknownClaim';
}

export interface V2Error_FailedToDecode {
  __kind: 'FailedToDecode';
}

export interface V2Error_MaxWeightInvalid {
  __kind: 'MaxWeightInvalid';
}

export interface V2Error_NotHoldingFees {
  __kind: 'NotHoldingFees';
}

export interface V2Error_TooExpensive {
  __kind: 'TooExpensive';
}

export interface V2Error_Trap {
  __kind: 'Trap';
  value: bigint;
}

export interface V2Error_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion';
}

export interface V2Error_WeightLimitReached {
  __kind: 'WeightLimitReached';
  value: bigint;
}

export interface V2Error_Barrier {
  __kind: 'Barrier';
}

export interface V2Error_WeightNotComputable {
  __kind: 'WeightNotComputable';
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf;

export interface V2WildMultiAsset_All {
  __kind: 'All';
}

export interface V2WildMultiAsset_AllOf {
  __kind: 'AllOf';
  id: V2AssetId;
  fun: V2WildFungibility;
}

export interface V3PalletInfo {
  index: number;
  name: Uint8Array;
  moduleName: Uint8Array;
  major: number;
  minor: number;
  patch: number;
}

export type V3WildMultiAsset =
  | V3WildMultiAsset_All
  | V3WildMultiAsset_AllOf
  | V3WildMultiAsset_AllCounted
  | V3WildMultiAsset_AllOfCounted;

export interface V3WildMultiAsset_All {
  __kind: 'All';
}

export interface V3WildMultiAsset_AllOf {
  __kind: 'AllOf';
  id: V3AssetId;
  fun: V3WildFungibility;
}

export interface V3WildMultiAsset_AllCounted {
  __kind: 'AllCounted';
  value: number;
}

export interface V3WildMultiAsset_AllOfCounted {
  __kind: 'AllOfCounted';
  id: V3AssetId;
  fun: V3WildFungibility;
  count: number;
}

export type V3BodyId =
  | V3BodyId_Unit
  | V3BodyId_Moniker
  | V3BodyId_Index
  | V3BodyId_Executive
  | V3BodyId_Technical
  | V3BodyId_Legislative
  | V3BodyId_Judicial
  | V3BodyId_Defense
  | V3BodyId_Administration
  | V3BodyId_Treasury;

export interface V3BodyId_Unit {
  __kind: 'Unit';
}

export interface V3BodyId_Moniker {
  __kind: 'Moniker';
  value: Uint8Array;
}

export interface V3BodyId_Index {
  __kind: 'Index';
  value: number;
}

export interface V3BodyId_Executive {
  __kind: 'Executive';
}

export interface V3BodyId_Technical {
  __kind: 'Technical';
}

export interface V3BodyId_Legislative {
  __kind: 'Legislative';
}

export interface V3BodyId_Judicial {
  __kind: 'Judicial';
}

export interface V3BodyId_Defense {
  __kind: 'Defense';
}

export interface V3BodyId_Administration {
  __kind: 'Administration';
}

export interface V3BodyId_Treasury {
  __kind: 'Treasury';
}

export type V3BodyPart =
  | V3BodyPart_Voice
  | V3BodyPart_Members
  | V3BodyPart_Fraction
  | V3BodyPart_AtLeastProportion
  | V3BodyPart_MoreThanProportion;

export interface V3BodyPart_Voice {
  __kind: 'Voice';
}

export interface V3BodyPart_Members {
  __kind: 'Members';
  count: number;
}

export interface V3BodyPart_Fraction {
  __kind: 'Fraction';
  nom: number;
  denom: number;
}

export interface V3BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion';
  nom: number;
  denom: number;
}

export interface V3BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion';
  nom: number;
  denom: number;
}

export type V2AssetInstance =
  | V2AssetInstance_Undefined
  | V2AssetInstance_Index
  | V2AssetInstance_Array4
  | V2AssetInstance_Array8
  | V2AssetInstance_Array16
  | V2AssetInstance_Array32
  | V2AssetInstance_Blob;

export interface V2AssetInstance_Undefined {
  __kind: 'Undefined';
}

export interface V2AssetInstance_Index {
  __kind: 'Index';
  value: bigint;
}

export interface V2AssetInstance_Array4 {
  __kind: 'Array4';
  value: Uint8Array;
}

export interface V2AssetInstance_Array8 {
  __kind: 'Array8';
  value: Uint8Array;
}

export interface V2AssetInstance_Array16 {
  __kind: 'Array16';
  value: Uint8Array;
}

export interface V2AssetInstance_Array32 {
  __kind: 'Array32';
  value: Uint8Array;
}

export interface V2AssetInstance_Blob {
  __kind: 'Blob';
  value: Uint8Array;
}

export type V3AssetInstance =
  | V3AssetInstance_Undefined
  | V3AssetInstance_Index
  | V3AssetInstance_Array4
  | V3AssetInstance_Array8
  | V3AssetInstance_Array16
  | V3AssetInstance_Array32;

export interface V3AssetInstance_Undefined {
  __kind: 'Undefined';
}

export interface V3AssetInstance_Index {
  __kind: 'Index';
  value: bigint;
}

export interface V3AssetInstance_Array4 {
  __kind: 'Array4';
  value: Uint8Array;
}

export interface V3AssetInstance_Array8 {
  __kind: 'Array8';
  value: Uint8Array;
}

export interface V3AssetInstance_Array16 {
  __kind: 'Array16';
  value: Uint8Array;
}

export interface V3AssetInstance_Array32 {
  __kind: 'Array32';
  value: Uint8Array;
}

export interface OutboundHrmpMessage {
  recipient: number;
  data: Uint8Array;
}

export type V2NetworkId =
  | V2NetworkId_Any
  | V2NetworkId_Named
  | V2NetworkId_Polkadot
  | V2NetworkId_Kusama;

export interface V2NetworkId_Any {
  __kind: 'Any';
}

export interface V2NetworkId_Named {
  __kind: 'Named';
  value: Uint8Array;
}

export interface V2NetworkId_Polkadot {
  __kind: 'Polkadot';
}

export interface V2NetworkId_Kusama {
  __kind: 'Kusama';
}

export type V2BodyId =
  | V2BodyId_Unit
  | V2BodyId_Named
  | V2BodyId_Index
  | V2BodyId_Executive
  | V2BodyId_Technical
  | V2BodyId_Legislative
  | V2BodyId_Judicial
  | V2BodyId_Defense
  | V2BodyId_Administration
  | V2BodyId_Treasury;

export interface V2BodyId_Unit {
  __kind: 'Unit';
}

export interface V2BodyId_Named {
  __kind: 'Named';
  value: Uint8Array;
}

export interface V2BodyId_Index {
  __kind: 'Index';
  value: number;
}

export interface V2BodyId_Executive {
  __kind: 'Executive';
}

export interface V2BodyId_Technical {
  __kind: 'Technical';
}

export interface V2BodyId_Legislative {
  __kind: 'Legislative';
}

export interface V2BodyId_Judicial {
  __kind: 'Judicial';
}

export interface V2BodyId_Defense {
  __kind: 'Defense';
}

export interface V2BodyId_Administration {
  __kind: 'Administration';
}

export interface V2BodyId_Treasury {
  __kind: 'Treasury';
}

export type V2BodyPart =
  | V2BodyPart_Voice
  | V2BodyPart_Members
  | V2BodyPart_Fraction
  | V2BodyPart_AtLeastProportion
  | V2BodyPart_MoreThanProportion;

export interface V2BodyPart_Voice {
  __kind: 'Voice';
}

export interface V2BodyPart_Members {
  __kind: 'Members';
  count: number;
}

export interface V2BodyPart_Fraction {
  __kind: 'Fraction';
  nom: number;
  denom: number;
}

export interface V2BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion';
  nom: number;
  denom: number;
}

export interface V2BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion';
  nom: number;
  denom: number;
}

export type V2WildFungibility =
  | V2WildFungibility_Fungible
  | V2WildFungibility_NonFungible;

export interface V2WildFungibility_Fungible {
  __kind: 'Fungible';
}

export interface V2WildFungibility_NonFungible {
  __kind: 'NonFungible';
}

export type V3WildFungibility =
  | V3WildFungibility_Fungible
  | V3WildFungibility_NonFungible;

export interface V3WildFungibility_Fungible {
  __kind: 'Fungible';
}

export interface V3WildFungibility_NonFungible {
  __kind: 'NonFungible';
}
